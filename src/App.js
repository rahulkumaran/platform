import { useState } from 'react'
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

  /*
  setting the sidebar state in App as we are using 2 navs - topnav and sidenav
  both the components share the same  state.
 */

  const [sidebar, setSidebar] = useState(false);
  const sidebarToggle = () => setSidebar(!sidebar);

  /* exclusively for mobile devices.
  this function is used for closing the nav on mobile screen
  once any menu item is clicked in the nav
  */

  const closeSidebar = (e) => {
    if (sidebar == true) {
      setSidebar(false)
    }
  }

  return (
    <Router>
      <TopNav sidebarToggle={sidebarToggle} showSidebar={sidebar} />
      <Container>
        <Row>
          <Col xs={1} md={3} lg={3} xl={3} xxl={2}>
            <Sidebar showSidebar={sidebar} closeSidebar={closeSidebar} />
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

