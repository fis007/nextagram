import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ModalC({ setModal, switchSignUp, setLoggedIn }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = () => {
    console.log(`Name: ${name}, Password: ${password}`);
    axios({
      method: "post",
      url: "https://insta.nextacademy.com/api/v1/login",
      data: {
        username: name,
        password: password,
      },
    }).then((result) => {
      console.log(result);
      localStorage.setItem("jwt", result.data.auth_token);
      localStorage.setItem("id", result.data.user.id);
      localStorage.setItem("name", result.data.user.username);
      localStorage.setItem("img", result.data.user.profile_picture);
      alert("You are logged in!");

      setLoggedIn(localStorage.getItem("jwt") !== null);

      history.push(`/users/${localStorage.id}`);
      setModal(false);

      /**
       * Example response:
      {
        "auth_token": "<auth token string>",
        "message": "Successfully signed in.",
        "status": "success",
        "user": {
          "id": 3,
          "profile_picture": "<profile-pic-url>",
          "username": "blake"
        }
      }
      */
    });
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={() => setModal(false)}>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <label>Username</label>
        <br />

        <input onChange={(e) => setName(e.target.value)}></input>
        <br />
        <br />
        <label>Password</label>
        <br />

        <input onChange={(e) => setPassword(e.target.value)}></input>
        <br />
        <br />
        <label>
          New member?
          <a onClick={() => switchSignUp()} href="#">
            Sign up here.
          </a>
        </label>
      </Modal.Body>

      <Modal.Footer>
        <Button
          disabled={name === "" || password === ""}
          onClick={() => handleSubmit()}
          variant="primary"
        >
          Login
        </Button>
        <Button onClick={() => switchSignUp()} variant="secondary">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
