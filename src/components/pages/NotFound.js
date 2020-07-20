import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {

    return (
        <Container style={{ height: '90vh' }}>
            <Row>
                <Col style={{ color: ' #faf0dc', textAlign: 'center' }}>
                    <h1 >No results found.</h1> <br /><h3>Try searching for 'Health' or 'Animal'</h3>

                </Col>
            </Row>
        </Container>
    );

};

export default NotFound;