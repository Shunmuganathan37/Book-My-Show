import React from "react";
import './Navbar.css';
import Logo from '../Images/Book MY Show.png';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <header>
      <Navbar  expand="lg">
        <Container>
      
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="BookMyShow" className="logo" />
          </Navbar.Brand>

          <Form className="d-flex ms-auto  w-100 w-md-50">
            <FormControl
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports, and Activities"
              className="input-value"
              aria-label="Search"
            />
          </Form>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link href="#">Chennai</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/login">
                  <Button  style={{background:'white',color:'red'}} className="btn text-danger">LogIN</Button>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar  variant="light" className="d-none d-md-block">
      <div className="d-flex justify-content-between">
  <Nav>
    <Link to="/Movies" className="nav-link">Movies</Link>
    <Link to="/Movies" className="nav-link">Stream</Link>
    <Link to="/Movies" className="nav-link">Events</Link>
    <Link to="/Movies" className="nav-link">Plays</Link>
    <Link to="/Movies" className="nav-link">Sports</Link>
    <Link to="/Movies" className="nav-link">Activities</Link>
  </Nav>

  <Nav>
    <Link to="/Movies" className="nav-link">List Your Show</Link>
    <Link to="/Movies" className="nav-link">Corporates</Link>
    <Link to="/Movies" className="nav-link">Offers</Link>
    <Link to="/Movies" className="nav-link">Gift Cards</Link>
  </Nav>
</div>

      </Navbar>
    </header>
  );
}

export default NavbarComponent;
