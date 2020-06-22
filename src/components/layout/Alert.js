import React from 'react';
import { Alert as BSAlert, Container } from 'react-bootstrap';


const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <Container style={{ height: '92vh' }}>
                <BSAlert variant={`${alert.type}`} dismissible style={{}}>
                    <BSAlert.Heading>{`${alert.msg}`}</BSAlert.Heading>
                    <p>
                        Maybe give one of these a try? [Insert TAGS]
                    </p>
                </BSAlert>
            </Container>

        )
    )


}

export default Alert;
