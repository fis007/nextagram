import React from "react";
import ProfileImage from "./ProfileImage";
import NavBar from "./NavBar";
import UserImages from "./UserImages";

export default function HomePage({ users }) {
  return (
    <div>
      <NavBar />

      <ul>
        {users.map((user) => (
          <>
            <div style={{ display: "flex", border: "1px solid red" }}>
              <ProfileImage
                id={user.id}
                name={user.username}
                image={user.profileImage}
              />
              <UserImages id={user.id} />
            </div>
          </>
        ))}
      </ul>
    </div>
  );
}
