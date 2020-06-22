
import React from 'react';
import './App.css';
import { Navbar, TedTalks, Alert, About, TedTalkCardDetails } from './components'

import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  state = {
    totalTalks: [],
    tedTalkDetails: {},
    thumbailsById: {},
    loading: false,
    alert: null
  }

  async componentDidMount() {
    // this.setState({ loading: true })
    // const REACT_APP_X_TEDTALK_API_KEY = 'd44877c783mshd58671523a30faap1f7ce2jsnce8f6d601239';
    // try {
    //   const { data } = await axios.get('https://bestapi-ted-v1.p.rapidapi.com/talksByDescription', {
    //     headers: { crossdomain: true, 'x-rapidapi-host': 'bestapi-ted-v1.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_TEDTALK_API_KEY },
    //     params: { size: '4', description: 'health' },
    //   });

    //   if (data.length) {
    //     {
    //       const staticData = await axios.get('staticdata.json');
    //       this.setState({ totalTalks: staticData.data, loading: true });
    //       this.setState({ loading: false })

    //       console.log(`get static data`, this.state.totalTalks);
    //       return;
    //     }
    //   }

    //   this.setState({ totalTalks: data });
    //   this.setState({ loading: false })

    //   console.log(this.state.totalTalks);
    //   return data;

    // } catch (e) {
    //   return []
    // }

  }

  clearResults = () => this.setState({ totalTalks: [] })

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => { this.setState({ alert: null }) }, 5000)
  }

  searchTalk = async (query) => {
    this.setState({ loading: true })
    try {
      const { data } = await axios.get('https://bestapi-ted-v1.p.rapidapi.com/talksByDescription', {
        headers: { crossdomain: true, 'x-rapidapi-host': 'bestapi-ted-v1.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_TEDTALK_API_KEY },
        params: { size: '8', description: query },
      });
      this.setState({ totalTalks: data, loading: false });
      return data;

    } catch (e) {
      const staticData = await axios.get('staticdata.json');
      this.setState({ ...staticData.data });
      this.setState({ loading: false })

      return []
    }
  }

  getThumbnail = async (vidId) => {
    try {
      const { data } = await axios.get('https://youtube-video-info1.p.rapidapi.com/youtube-info/', {
        headers: { crossdomain: true, 'x-rapidapi-host': 'youtube-video-info1.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_TEDTALK_API_KEY },
        params: { url: `https://www.youtube.com/watch?v=${vidId}` },
      });

      this.setState({ thumbailsById: { ...this.state.thumbailsById, ...{ [`${vidId}`]: data.info.thumbnail } } });

      return data;

    } catch (e) {
      const staticData = await axios.get('http://localhost:3000/staticdata.json');
      this.setState({ ...staticData.data });
      this.setState({ loading: false })
      return []
    }
  }

  getTedTalkCardDetails = async (vidId) => {
    this.setState({ loading: true })
    try {
      const { data } = await axios.get('https://youtube-video-info1.p.rapidapi.com/youtube-info/', {
        headers: { crossdomain: true, 'x-rapidapi-host': 'youtube-video-info1.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_TEDTALK_API_KEY },
        params: { url: `https://www.youtube.com/watch?v=${vidId}` },
      });

      this.setState({ tedTalkDetails: { ...data.info }, loading: false });

      return data;

    } catch (e) {
      const staticData = await axios.get('/tedtalks/staticdata.json');
      this.setState({ ...staticData.data });
      this.setState({ loading: false })
      return []
    }

    // try {
    //   const staticData2 = await axios.get(`http://localhost:3000/staticdata2.json`);
    //   this.setState({ tedTalkDetails: staticData2.data[0], loading: true });
    //   this.setState({ loading: false })

    //   console.log(`get static data 2`, this.state.tedTalkDetails);
    //   return;

    // } catch (e) {
    //   return []
    // }

  }

  // API turned out to be unreliable
  // getTedTalkCardDetails = async (vidId) => {
  //   this.setState({ loading: true })
  //   console.log(vidId, "FROM MATCH PARAMS")

  //  try {
  //     console.log("I am abt to fetch video details...")

  //     //unreliable youtube api..
  //     const { data } = await axios.get('https://youtube-video-info.p.rapidapi.com/video_details', {
  //       headers: { crossdomain: true, 'x-rapidapi-host': 'youtube-video-info.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_TEDTALK_API_KEY },
  //       params: { video: vidId },
  //     });
  //     console.log("I am Done fetching video details...")

  //     this.setState({ tedTalkDetails: { ...data.Video_Details } });
  //     console.log("did the state update?", this.state.tedTalkDetails)
  //     return data;

  //   } catch (e) {
  //     return []
  //   }

  //   // try {
  //   //   const staticData2 = await axios.get(`http://localhost:3000/staticdata2.json`);
  //   //   this.setState({ tedTalkDetails: staticData2.data[0], loading: true });
  //   //   this.setState({ loading: false })

  //   //   console.log(`get static data 2`, this.state.tedTalkDetails);
  //   //   return;

  //   // } catch (e) {
  //   //   return []
  //   // }

  // }

  render() {
    const { totalTalks, loading, tedTalkDetails, thumbailsById } = this.state;
    return (
      <>
        <Router>
          <Navbar searchTalk={this.searchTalk} clearResults={this.clearResults} setAlert={this.setAlert} />
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <>
                {totalTalks.length > 0
                  ? <Container className="mt-3">
                    <Row> <TedTalks totalTalks={totalTalks} getThumbnail={this.getThumbnail} thumbailsById={thumbailsById} loading={loading} /> </Row></Container>
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
                    tedTalkDetails={tedTalkDetails} getTedTalkCardDetails={this.getTedTalkCardDetails} loading={loading} />}
                  {/* {tedTalkDetails && <TedTalkCardDetails
                  {...props}
                  tedTalkDetails={tedTalkDetails} />} */}
                </Row>
              </Container>} </>
            )} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Router>
      </>

    );
  }


}

export default App;
