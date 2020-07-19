// All tedtalks search results
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap'
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


export default TedTalks;
