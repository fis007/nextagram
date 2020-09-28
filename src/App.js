import React, { useState, useEffect } from "react";

import "./App.css";

import axios from "axios";
import HomePage from "./pages/HomePage";
import ProfileImage from "./pages/ProfileImage";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import UserProfilePage from "./pages/UserProfilePage";
import NavBar from "./pages/NavBar";

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
      <NavBar />
      <BrowserRouter>
        {/* <Link to="/">Home</Link>
        <Link to="/users/1">My Profile</Link> */}

        <Switch>
          <Route
            path="/users/:id"
            render={() => {
              return <UserProfilePage users={users} />;
            }}
          />

          <Route
            exact
            path="/"
            render={() => {
              return <HomePage users={users} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
