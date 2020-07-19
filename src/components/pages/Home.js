import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TedTalkContext from '../../context/tedtalk/tedTalkContext';

const Home = () => {
    const tedTalkContext = useContext(TedTalkContext)
    const { totalTalks } = tedTalkContext;

    return (
        <Container style={{ height: '90vh' }}>
            <Row>
                <Col style={{ color: ' #faf0dc', textAlign: 'center' }}>
                    <h1 >Welcome to Ted Talk Finder. <br />Search to learn something new!</h1>

                </Col>
            </Row>
        </Container>
    );
}

export default Home;

