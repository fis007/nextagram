import React, { useState } from "react";
import NavBar from "./NavBar";
import "./App.css";
import ProfileImage from "./ProfileImage";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "blake",
      profileImage:
        "http://next-curriculum-instagram.s3.amazonaws.com/idol2-blake.jpg",
    },
    {
      id: 2,
      username: "ryanG",
      profileImage:
        "http://next-curriculum-instagram.s3.amazonaws.com/idol1-ryan.jpg",
    },
    {
      id: 3,
      username: "bigfan",
      profileImage:
        "http://next-curriculum-instagram.s3.amazonaws.com/bigfan-9AE7468E-4C35-41D1-AA68-31939891B5E1.png",
    },
  ]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <NavBar />
      <ul>
        {users.map((user) => (
          <ProfileImage
            id={user.id}
            name={user.username}
            image={user.profileImage}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
