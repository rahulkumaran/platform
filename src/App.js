import './App.css';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { CollectionOne, TankWars, Spiritopoly, AuguryFinance } from './pages/collection-one';
import Team from './pages/Team';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Router>
      <TopNav />
      <Container>
        <Row>
          <Col xs={1} md={3} lg={3} xl={3} xxl={2}>
            <Sidebar />
          </Col>
          <Col xs={11} md={9} lg={9} xl={9} xxl={10}>
            <Switch>
              <Route path='/home' exact component={Home} />
              <Route path='/collection-one' exact component={CollectionOne} />
              <Route path='/collection-one/tankwars' exact component={TankWars} />
              <Route path='/collection-one/spiritopoly' exact component={Spiritopoly} />
              <Route path='/collection-one/auguryfinance' exact component={AuguryFinance} />
              <Route path='/team' exact component={Team} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;

// const Container = styled.div`
// max-width: 950px;
// margin: 0;
// margin-top: 20px;
// margin-left: 260px;

// @media (max-width: 850px) {
//   margin-left: 20px;
// }
