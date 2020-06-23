// Ted Talk Video Details
import React, { useEffect } from 'react';
import { Card, Button, Col, Container } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from 'prop-types'
//internal 
import Spinner from '../layout/Spinner'

const TedTalkCardDetails = ({ tedTalkDetails: { description, fulltitle, view_count, id }, loading, getTedTalkCardDetails, match }) => {

    useEffect(() => {
        getTedTalkCardDetails(match.params.videoId)
        //eslint-disable-next-line
    }, []);


    const spinnerStyle = { color: '#800000', width: '5rem', height: '5rem', position: 'relative', top: '50%', left: '50%' }
    if (loading) return <Container fluid style={{ height: '90vh' }}><Spinner spinnerStyle={spinnerStyle} /></Container>
    return (
        <>
            <Col>
                <Card style={{ borderRadius: '5px', backgroundColor: '#211a23', color: '#faf0dc' }}>
                    <Card.Body>
                        <iframe title={fulltitle} width="100%" height="360"
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

TedTalkCardDetails.propTypes = {
    tedTalkDetails: PropTypes.object,
    description: PropTypes.string,
    fulltitle: PropTypes.string,
    view_count: PropTypes.number,
    id: PropTypes.string,
    loading: PropTypes.bool,
    getTedTalkCardDetails: PropTypes.func
}



export default TedTalkCardDetails;