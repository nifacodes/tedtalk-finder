// Ted Talk Video Details
import React, { Component } from 'react';
import { Card, Button, Col, Container } from 'react-bootstrap'
import Spinner from '../layout/Spinner'
import { LinkContainer } from "react-router-bootstrap";

class TedTalkCardDetails extends Component {
    componentDidMount() {
        this.props.getTedTalkCardDetails(this.props.match.params.videoId)
    }
    render() {
        const { tedTalkDetails: { description, fulltitle, view_count, id }, loading } = this.props;
        const spinnerStyle = { color: '#800000', width: '5rem', height: '5rem', position: 'relative', top: '50%', left: '50%' }
        if (loading) return <Container fluid style={{ height: '90vh' }}><Spinner spinnerStyle={spinnerStyle} /></Container>
        return (
            <>
                <Col>
                    <Card style={{ borderRadius: '5px', backgroundColor: '#211a23', color: '#faf0dc' }}>
                        <Card.Body>
                            <iframe width="100%" height="360"
                                src={`https://www.youtube.com/embed/${id}`}></iframe>
                            <Card.Title>{fulltitle}</Card.Title>
                            <Card.Text>
                                {`${view_count} views`}
                            </Card.Text>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <LinkContainer to='/'>
                                <Button className="btn-watch">Back To Search</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card >
                </Col >
            </>
        );
    }

}

export default TedTalkCardDetails;