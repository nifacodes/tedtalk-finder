// Card Display For One Talk After Search Results
import React, { Component } from 'react';
import { Card, Button, Col, Container } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import CountUp from 'react-countup';
import Spinner from '../layout/Spinner'

// refactored to use another api, needed to convert this to classbased to fetch thumbail when component mounts (Cos of Bad API)
class TedTalkCard extends Component {
    componentDidMount() {
        this.props.getThumbnail(this.props.tedTalkItem.youTubeID)
    }
    render() {
        const { name, speaker, viewCount, youTubeID, speakerBio } = this.props.tedTalkItem;
        const nameAndColon = `${speaker}:`;
        const withoutNameStr = name.replace(nameAndColon, "")
        const spinnerStyle = { color: '#800000', width: '5rem', height: '5rem', position: 'relative' }
        return (
            <>
                <Col xs={12} md={3} >
                    <Card style={{ borderRadius: '5px', backgroundColor: '#211a23', color: '#faf0dc' }} >
                        {/* {loading ? <Card.Img className="" variant="top" src={this.props.thumbailsById[youTubeID]} style={{ borderRadius: '5px' }} /> : <Container > <Spinner /> </Container>} */}
                        {this.props.thumbailsById[youTubeID] ? <Card.Img className="" variant="top" src="https://i.ytimg.com/vi_webp/jiUKpX09zo4/maxresdefault.webp" style={{ borderRadius: '5px', height: '180', width: '286' }} /> : <Card.Header><Container><Spinner spinnerStyle={spinnerStyle} /> </Container></Card.Header>}

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
}
export default TedTalkCard;
