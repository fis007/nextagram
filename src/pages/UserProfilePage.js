import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileImage from "./ProfileImage";
import UserImages from "./UserImages";
import { useParams } from "react-router-dom";
export default function UserProfilePage() {
  let { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    // performing a GET request
    axios
      .get(`https://insta.nextacademy.com/api/v1/users/${id}`)
      .then((result) => {
        // If successful, we do stuffs with 'result'
        setUser(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }, []);
  console.log(id);
  return (
    <div style={{ paddingLeft: "1%" }}>
      <div style={{ display: "flex" }}>
        <img
          style={{
            height: "20%",
            width: "20%",
            paddingBottom: "1%",
            paddingRight: "1%",
          }}
          src={user.profileImage}
        />
        <h2>@{user.username}</h2>
      </div>

      <UserImages id={id} />
    </div>
  );
}

// id={user.id}
// name={user.username}
// image={user.profileImage}
