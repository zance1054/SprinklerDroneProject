import React, { Component } from 'react';
import { Jumbotron, Button, Image, Navbar, Nav, NavItem, 
          MenuItem, NavDropdown, Grid, Row, Col } from 'react-bootstrap'
import waterdragon from "./WaterDragon.PNG"
// import './App.css';
import Title from './Components/Title'

const styles = {
  topLevelStyle: {
    backgroundColor: 'lightblue',
  },
  images: {
    height: "250px",
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
  textStyle: {
    textAlign: 'center',
  },
}
class App extends Component {
  render() {
    return (
      <div style={styles.topLevelStyle} className="App">

          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">Water Dragon</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  FAQ
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Contact Us
                </NavItem>
                
                <NavDropdown eventKey={3} title="Product Features" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Lawn Maintenence</MenuItem>
                  <MenuItem eventKey={3.2}>Automated Scheduling</MenuItem>
                  <MenuItem eventKey={3.3}>Data Analytics</MenuItem>
                  {/* <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem> */}
                </NavDropdown>
                
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Sign Up
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Log In
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


          <Grid>
            <Row className="show-grid">
              {/* xs is small screens, md is medium+ screens */}
              <Col xs={12} md={6} style={styles.textStyle}>
                  <Image src={waterdragon} responsive style={styles.imagescf} />
                <p>
                  <Title title="Water Dragon" />
                  Drone-based water distribution.
                </p>
              </Col>
              <Col xs={12} md={6}>
                  <Jumbotron>
                    <h1>Water Dragon</h1>
                    <p>
                      The automated lawn nourishing system.
                    </p>
                    <div>
                      <Button bsStyle="primary">Learn more</Button>
                    </div>
                  </Jumbotron>
              </Col>
            </Row>
          </Grid>


          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a> */}
      </div>
    );
  }
}

export default App;
