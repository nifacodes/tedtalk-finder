import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {

    return (
        <Container style={{ height: '90vh' }}>
            <Row>
                <Col style={{ color: ' #faf0dc', textAlign: 'center' }}>
                    <h1 >Welcome to Ted Talk Finder. <br /></h1>
                    <p>This app uses Twitter Bootstrap, implements React's ContexAPI for data management, integrates TedTalk and Youtube APIs from RapidAPI. Since these APIs are for testing purposes, please be aware, if they are not working, static data will ensue. You've been warned :)</p>
                </Col>
            </Row>
        </Container>
    );

}


export default About;