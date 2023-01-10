import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Navigation.css'
import React from 'react'

const Navigation = () => {
    return (
        <>
            <Navbar className='' fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav">
                            <Link className="link" to="/">
                                <h1 style={{ margin: "10px" }}>Task2</h1></Link>
                            <Link className="link" to="/noQuill">
                                <h1 style={{ margin: "10px" }}>No Quill</h1></Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navigation