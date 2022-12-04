import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SW from './SW.png';

function CustomNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                src={SW}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="ShadiWaale-Logo"
                />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/AboutUs">About Us</Nav.Link>
            </Nav>
            </Container>
      </Navbar>
    )
}

export default CustomNavbar