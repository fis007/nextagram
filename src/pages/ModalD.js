import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export default function ModalD({ setModal, switchLogin, setSignUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(`Name: ${name}, Email: ${email} Password: ${password}`);

    axios({
      method: "POST",
      url: "https://insta.nextacademy.com/api/v1/users/",
      data: {
        username: name,
        email: email,
        password: password,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error.response); // so that we know what went wrong if the request failed
      });

    axios({
      method: "POST",
      url: "https://insta.nextacademy.com/api/v1/login",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response); // so that we know what went wrong if the request failed
      });

    setSignUp(false);
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={() => setSignUp(false)}>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <label>Username</label>
        <br />
        <input onChange={(e) => setName(e.target.value)}></input>
        <br />
        <br />
        <label>Email</label>
        <br />
        <input onChange={(e) => setEmail(e.target.value)}></input>
        <br />
        <br />
        <label>Password</label>
        <br />
        <input onChange={(e) => setPassword(e.target.value)}></input>
        <br />
        <br />
        <label>
          Already a member?{" "}
          <a onClick={() => switchLogin()} href="#">
            Log in here.
          </a>
        </label>
      </Modal.Body>

      <Modal.Footer>
        <Button
          disabled={name === "" || email === "" || password === ""}
          onClick={() => handleSubmit()}
        >
          Sign Up
        </Button>
        <Button onClick={() => setSignUp(false)} variant="secondary">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
