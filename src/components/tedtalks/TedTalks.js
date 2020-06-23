// All tedtalks search results
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
// internal
import TedTalkCard from './TedTalkCard';
import Spinner from './../layout/Spinner'
import TedTalkContext from '../../context/tedtalk/tedTalkContext';


const TedTalks = () => {
    const tedTalkContext = useContext(TedTalkContext)
    const { loading, totalTalks } = tedTalkContext;

    if (loading) return <Container fluid style={{ height: '92vh' }}>
        <Spinner /> </Container>

    return (
        <> {totalTalks &&

            totalTalks.map(tedTalkItem => {
                return (
                    <TedTalkCard key={tedTalkItem.youTubeID.toString()} tedTalkItem={tedTalkItem} />
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
