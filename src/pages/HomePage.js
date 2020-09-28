import React from "react";
import ProfileImage from "./ProfileImage";
import NavBar from "./NavBar";
import UserImages from "./UserImages";

export default function HomePage({ users }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                border: "1px solid red",
              }}
            >
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
