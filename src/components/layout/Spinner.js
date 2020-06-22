import React from 'react';
import { Spinner as BSSpinner } from 'react-bootstrap';
const Spinner = ({ spinnerStyle }) => {
    return (
        <BSSpinner style={spinnerStyle} animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </BSSpinner>


    )
}


export default Spinner;