import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/users">Profiles</Nav.Link>
                        <NavDropdown title="Post" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/post">Posts</NavDropdown.Item>
                            <NavDropdown.Item href="/post/create">Create</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
