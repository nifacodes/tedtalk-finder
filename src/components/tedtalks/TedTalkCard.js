// Card Display For One Talk After Search Results
import React, { useEffect } from 'react';
import { Card, Button, Col, Container } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import CountUp from 'react-countup';
import PropTypes from 'prop-types'
// internal
import Spinner from '../layout/Spinner'

// refactored to use another api, needed to convert this to classbased to fetch thumbail when component mounts (Cos of Bad API)

const TedTalkCard = ({ tedTalkItem: { name, speaker, viewCount, youTubeID, speakerBio }, getThumbnail, thumbnailsById }) => {
    useEffect(() => {
        getThumbnail(youTubeID)
        //eslint-disable-next-line
    }, [])

    const nameAndColon = `${speaker}:`;
    const withoutNameStr = name.replace(nameAndColon, "")
    const spinnerStyle = { color: '#800000', width: '5rem', height: '5rem', position: 'relative' }
    { console.log("thumbnails---", thumbnailsById[youTubeID]) }
    return (

        <>
            <Col xs={12} md={3} >
                <Card style={{ borderRadius: '5px', backgroundColor: '#211a23', color: '#faf0dc' }} >
                    {/* {loading ? <Card.Img className="" variant="top" src={this.props.thumbnailsById[youTubeID]} style={{ borderRadius: '5px' }} /> : <Container > <Spinner /> </Container>} */}
                    {thumbnailsById[youTubeID] ? <Card.Img className="" variant="top" src={thumbnailsById[youTubeID]} style={{ borderRadius: '5px', height: '180', width: '286' }} /> : <Card.Header><Container><Spinner spinnerStyle={spinnerStyle} /> </Container></Card.Header>}

                    <Card.Body>
                        <Card.Title>{withoutNameStr}</Card.Title>
                        <Card.Text>
                            {speaker}
                        </Card.Text>
                        <Card.Text>
                            {speakerBio}
                        </Card.Text>
                        <Card.Text>
                            <CountUp start={0} end={viewCount} duration={4} separator="," />{'  views'}
                        </Card.Text>
                        {/* <LinkContainer to={`/tedtalks/${youTubeID}`}>
                        <Button className="btn-watch" onClick={() => getTedTalkCardDetails(youTubeID)}>Watch</Button>
                    </LinkContainer> */}
                        <LinkContainer to={`/tedtalks/${youTubeID}`}>
                            <Button className="btn-watch">Watch</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

TedTalkCard.propTypes = {
    name: PropTypes.bool,
    speaker: PropTypes.string,
    viewCount: PropTypes.number,
    youTubeID: PropTypes.string,
    speakerBio: PropTypes.string,
    getThumbnail: PropTypes.func,
    thumbnailsById: PropTypes.object
}


export default TedTalkCard;
