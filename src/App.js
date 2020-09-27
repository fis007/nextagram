import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "./App.css";
import ProfileImage from "./ProfileImage";
import axios from "axios";
import HomePage from "./HomePage";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // performing a GET request
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then((result) => {
        // If successful, we do stuffs with 'result'
        setUsers(result.data);
      })
      .catch((error) => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <HomePage users={users} />
    </div>
  );
}

export default App;
