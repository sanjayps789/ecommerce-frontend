import React, { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { googleSignInAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function OAuth() {
    const [googleData, setGoogleData] = useState({
        username: "", email: ""
    });
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);

            // Directly create the userData object to pass to the API
            const userData = {
                username: result.user.displayName,
                email: result.user.email
            };

            // Update the state for future use, if needed
            setGoogleData(userData);
            console.log(userData);

            // Pass the userData directly to the API
            const res = await googleSignInAPI(userData);
            console.log(res);

            if (res.status === 200) {
                localStorage.setItem("token", res.data.token);
                toast.success("Login Successful!!!");

                // Reset the googleData state here if necessary
                setGoogleData({
                    username: "",
                    email: ""
                });

                setTimeout(() => navigate("/allproducts"), 2000);
            } else {
                toast.error(res.response.data);
            }
        } catch (err) {
            console.log('Could not sign in with Google', err);
        }
    }

    return (
        <div className='d-grid mb-3'>
            <button onClick={handleGoogleLogin} type='button' className="btn btn-danger text-white">
                SIGN IN WITH GOOGLE
            </button>
            <ToastContainer autoClose={2000} theme='dark' />
        </div>
    )
}

export default OAuth;
