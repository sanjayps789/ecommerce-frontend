import React from 'react'
import { Spinner } from 'react-bootstrap'
function Loader() {
    return (
        <div style={{ height: '300px' }} className='d-flex align-items-center justify-content-center text-center w-100'>
            <Spinner size='' animation="border" variant="danger" />
        </div>
    )
}

export default Loader