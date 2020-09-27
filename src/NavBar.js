import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <img src="https://insta.nextacademy.com/static/favicon.png" />
      <Navbar.Brand href="#home">Nextagram</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <nav className="d-flex ml-auto">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Type username"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav className="mr-auto">
            <Nav.Link href="#home">Users</Nav.Link>
            <Nav.Link href="#link">Sign In</Nav.Link>
            <Nav.Link href="#link">Sign Up</Nav.Link>
          </Nav>
        </nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
