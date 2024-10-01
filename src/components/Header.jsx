import React from 'react';
import logo from '../static/logo.png';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      {/* Top Contact Information Section */}
      <div className="top-contact">
        <Container className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <FaPhoneAlt style={{ marginRight: '8px' }} /> 
            <span>+123 456 789</span>
          </div>
          <div className="d-flex align-items-center">
            <FaEnvelope style={{ marginRight: '8px' }} /> 
            <span>info@yourcompany.com</span>
          </div>
          <div className="d-flex align-items-center">
            <FaMapMarkerAlt style={{ marginRight: '8px' }} /> 
            <span>Your Location</span>
          </div>
        </Container>
      </div>

      {/* Sticky Navbar Section */}
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="/track-goods">Track Goods</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              {/* Get Quote Button */}
              <Button href="/contact" variant="primary" className="ms-3">
                Get Quote
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Spacer div to prevent content from being hidden under the fixed navbar */}
      <div style={{ height: '80px' }}></div>
    </>
  );
};

export default Header;
