import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

//internal
import './App.css';
import {
  Navbar, TedTalks, Alert, About,
  TedTalkCardDetails
} from './components'
import TedTalkState from './context/tedtalk/TedTalkState'

const App = () => {
  const [totalTalks, setTotalTalks] = useState([]);
  // refactor name to tedtalkCardDetails
  const [tedTalkDetails, setTedTalkDetails] = useState({});
  const [thumbnailsById, setThumbnailsById] = useState({ "": "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlertState] = useState(null);
  const [staticState, setStaticState] = useState({})


  const setAlert = (msg, type) => {
    setAlertState({ msg, type })
    setTimeout(() => { setAlertState(null) }, 3000)
  }



  const getThumbnail = async (vidId) => {
    try {
      const { data } = await axios.get('https://youtube-video-info1.p.rapidapi.com/youtube-info/', {
        headers: { crossdomain: true, 'x-rapidapi-host': 'youtube-video-info1.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_TEDTALK_API_KEY },
        params: { url: `https://www.youtube.com/watch?v=${vidId}` },
      });

      // setThumbnailsById({ thumbnailsById: { ...thumbnailsById, ...{ [`${vidId}`]: data.info.thumbnail } } });

      setThumbnailsById(prevState => ({
        ...prevState,
        ...{ [`${vidId}`]: data.info.thumbnail }
      }))

      return data;

    } catch (e) {
      const staticData = await axios.get('staticdata.json');
      setStaticState(staticData.data);
      setLoading(false)
      return []
    }
  }

  const getTedTalkCardDetails = async (vidId) => {
    setLoading(true)
    try {
      const { data } = await axios.get('https://youtube-video-info1.p.rapidapi.com/youtube-info/', {
        headers: { crossdomain: true, 'x-rapidapi-host': 'youtube-video-info1.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_TEDTALK_API_KEY },
        params: { url: `https://www.youtube.com/watch?v=${vidId}` },
      });

      setTedTalkDetails(data.info);
      setLoading(false)

      return data;

    } catch (e) {
      const staticData = await axios.get('/tedtalks/staticdata.json');
      setStaticState(staticData.data);
      setLoading(false)
      return []
    }
  }

  return (
    <>
      <TedTalkState>
        <Router>
          <Navbar setAlert={setAlert} />
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <>
                {totalTalks.length > 0
                  ? <Container className="mt-3">
                    <Row> <TedTalks totalTalks={totalTalks} getThumbnail={getThumbnail} thumbnailsById={thumbnailsById} loading={loading} /> </Row></Container>
                  :

                  <Container style={{ height: '90vh' }}>
                    <Row>
                      <Col style={{ color: ' #faf0dc', textAlign: 'center' }}>
                        <h1 >Welcome to Ted Talk Finder. <br />Search to learn something new!</h1>

                      </Col>
                    </Row>
                  </Container>} </>
            )} />
            <Route exact path='/tedtalks/:videoId' render={props => (
              <> <Container>
                <Row>
                  {tedTalkDetails && <TedTalkCardDetails
                    {...props}
                    tedTalkDetails={tedTalkDetails} getTedTalkCardDetails={getTedTalkCardDetails} loading={loading} />}
                  {/* {tedTalkDetails && <TedTalkCardDetails
                  {...props}
                  tedTalkDetails={tedTalkDetails} />} */}
                </Row>
              </Container>} </>
            )} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Router>
      </TedTalkState>
    </>

  );

}


export default App;
