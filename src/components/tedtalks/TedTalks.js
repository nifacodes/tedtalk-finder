// All tedtalks search results
import React from 'react';
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
// internal
import TedTalkCard from './TedTalkCard';
import Spinner from './../layout/Spinner'

const TedTalks = ({ getThumbnail, totalTalks, thumbnailsById, loading }) => {


    if (loading) return <Container fluid style={{ height: '92vh' }}>
        <Spinner /> </Container>
    return (
        <>
            {
                totalTalks.map(tedTalkItem => {
                    { console.log("thumbnails talkkssss---", thumbnailsById[tedTalkItem.youTubeID]) }

                    return (
                        <TedTalkCard key={tedTalkItem.youTubeID.toString()} tedTalkItem={tedTalkItem}
                            getThumbnail={getThumbnail} thumbnailsById={thumbnailsById} loading={loading} />

                    )
                })
            }
        </>
    );
}

TedTalks.propTypes = {
    getThumbnail: PropTypes.func,
}


export default TedTalks;
