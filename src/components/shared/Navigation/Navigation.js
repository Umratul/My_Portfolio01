import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
  <Navbar className="nv-body" sticky="top" variant="dark" collapseOnSelect expand="lg">
    <Container className='text'>
    <Navbar.Brand href="#home">Umratul</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/projects">My Projects</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/blogs">Blogs</Nav.Link>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  

  
</>
    );
};

export default Navigation;