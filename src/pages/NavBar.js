import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar({
  switchLogin,
  switchSignUp,
  loggedIn,
  setLoggedIn,
}) {
  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
    switchLogin();
  };

  const login = () => {
    setLoggedIn(localStorage.getItem("jwt") !== null);
    switchLogin();
  };
  return (
    <Navbar bg="light" expand="lg">
      <img
        alt="img"
        style={{ marginRight: "0.5%" }}
        src="https://insta.nextacademy.com/static/favicon.png"
      />

      <Navbar.Brand href="/">Nextagram</Navbar.Brand>
      <Link style={{ marginRight: "2%", color: "gray" }} to="/profile">
        My Profile Page
      </Link>

      {localStorage.getItem("name") !== null ? (
        <h6 style={{ color: "gray", margin: "auto" }}>
          Welcome {localStorage.name}
          <img
            style={{
              width: "7%",
              marginLeft: "2%",
              border: "1px solid white",
            }}
            src={localStorage.img}
          />
        </h6>
      ) : null}

      <Link style={{ color: "gray" }} to="/upload">
        Upload Image
      </Link>

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
            {loggedIn ? (
              <Nav.Link onClick={() => logout()} href="#link">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => login()} href="#link">
                Login
              </Nav.Link>
            )}

            <Nav.Link onClick={() => switchSignUp()} href="#link">
              Sign Up
            </Nav.Link>
          </Nav>
        </nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
