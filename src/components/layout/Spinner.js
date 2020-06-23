import React from 'react';
import { Spinner as BSSpinner } from 'react-bootstrap';
import PropTypes from 'prop-types'

const Spinner = ({ spinnerStyle }) => {
    return (
        <BSSpinner style={spinnerStyle} animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </BSSpinner>


    )
}

Spinner.propTypes = {
    spinnerStyle: PropTypes.object
}

export default Spinner;