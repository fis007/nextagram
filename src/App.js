import React, { useState, useEffect } from "react";

import "./App.css";

import axios from "axios";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";
import UserProfilePage from "./pages/UserProfilePage";
import NavBar from "./pages/NavBar";
import ModalC from "./pages/ModalC";
import ModalD from "./pages/ModalD";
import MyProfilePage from "./pages/MyProfilePage";
import UploadPage from "./pages/UploadPage";

function App() {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("name") !== null
  );

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

  const openModal = () => {
    console.log("test");
    setModal(true);
  };

  const switchSignUp = () => {
    setModal(false);
    setSignUp(true);
  };

  const switchLogin = () => {
    setModal(true);
    setSignUp(false);
  };

  const whichModal = () => {
    if (modal) {
      return (
        <ModalC
          setLoggedIn={setLoggedIn}
          switchSignUp={switchSignUp}
          setModal={setModal}
        />
      );
    } else if (signUp) {
      return <ModalD setSignUp={setSignUp} switchLogin={switchLogin} />;
    } else {
      return (
        <Switch>
          <Route
            path="/users/:id"
            render={() => {
              return <UserProfilePage users={users} />;
            }}
          />

          <Route path="/profile" component={withRouter(MyProfilePage)} />
          <Route path="/upload" component={withRouter(UploadPage)} />

          <Route
            exact
            path="/"
            render={() => {
              return <HomePage users={users} />;
            }}
          />
        </Switch>
      );
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <NavBar
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
        switchSignUp={switchSignUp}
        switchLogin={switchLogin}
      />
      {whichModal()}
    </div>
  );
}

export default App;
