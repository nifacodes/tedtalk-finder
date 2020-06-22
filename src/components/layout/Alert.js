import React from 'react';
import { Alert as BSAlert, Container } from 'react-bootstrap';

// TODO: Set default tags args, then have a function that 
// randomly selects the tags property from search results
// for more inspiration on what to search
const Alert = ({ alert, tags }) => {
    return (
        alert !== null && (
            <Container style={{ height: '92vh' }}>
                <BSAlert variant={`${alert.type}`} dismissible style={{}}>
                    <BSAlert.Heading>{`${alert.msg}`}</BSAlert.Heading>
                    <h5>
                        Maybe give one of these a try? [Health, Animal, Design]
                        {/* {tags.forEach(tag=>(<p>{tag}</p>))}  */}
                    </h5>

                </BSAlert>
            </Container>

        )
    )


}

export default Alert;
