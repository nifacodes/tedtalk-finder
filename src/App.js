import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//internal
import './App.css';
import {
  Navbar, TedTalks, Alert, About,
  TedTalkCardDetails, Home, NotFound
} from './components'
import TedTalkState from './context/tedtalk/TedTalkState'
import AlertState from './context/alert/AlertState'

const App = () => {

  // refactor name to tedtalkCardDetails
  // const [staticState, setStaticState] = useState({})

  return (
    <>
      <TedTalkState>
        <AlertState>
          <Router>
            <Navbar />
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/tedtalks/:videoId' render={(props) => (
                <Container>
                  <Row>
                    <TedTalkCardDetails {...props} />
                  </Row>
                </Container>
              )} />
              <Route exact path='/about' component={About} />

              <Route exact path='/search/:search' render={props => (
                <Container className="mt-3">
                  <Row>
                    <TedTalks />
                  </Row>
                </Container>
              )} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </AlertState>
      </TedTalkState>
    </>

  );

}


export default App;
