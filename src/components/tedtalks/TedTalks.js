// // All tedtalks search results
// import React, { Component } from 'react';
// import TedTalkCard from './TedTalkCard';
// import Spinner from './../layout/Spinner'

// class TedTalks extends Component {
//     componentDidMount() {
//         console.log("tedTalks Arraay Mounting..")
//     }
//     render() {
//         const { totalTalks, getTedTalkCardDetails, getThumbnail } = this.props;
//         return (
//             <>
//                 {
//                     totalTalks.map(tedTalkItem => {
//                         return (
//                             // <TedTalkCard key={tedTalkItem.youtubeID} tedTalkItem={tedTalkItem}
//                             //     getTedTalkCardDetails={getTedTalkCardDetails} />
//                             <TedTalkCard key={tedTalkItem.youtubeID} tedTalkItem={tedTalkItem}
//                                 getThumbnail={getThumbnail} />
//                         )
//                     })
//                 }
//             </>
//         );
//     }
// }

// export default TedTalks;


// All tedtalks search results
import React from 'react';
import TedTalkCard from './TedTalkCard';
import Spinner from './../layout/Spinner'
import { Container } from 'react-bootstrap'

const TedTalks = ({ totalTalks, getTedTalkCardDetails, getThumbnail, thumbailsById, loading }) => {
    if (loading) return <Container fluid style={{ height: '92vh' }}>
        <Spinner /> </Container>
    return (
        <>
            {
                totalTalks.map(tedTalkItem => {
                    return (
                        // <TedTalkCard key={tedTalkItem.youtubeID} tedTalkItem={tedTalkItem}
                        //     getTedTalkCardDetails={getTedTalkCardDetails} />
                        <TedTalkCard key={tedTalkItem.youTubeID.toString()} tedTalkItem={tedTalkItem}
                            getThumbnail={getThumbnail} thumbailsById={thumbailsById} loading={loading} />
                    )
                })
            }
        </>
    );
}

export default TedTalks;
