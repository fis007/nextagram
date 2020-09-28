import React from "react";
import { Button } from "react-bootstrap";
import { Route, Link } from "react-router-dom";

export default function ProfileImage({ id, name, image }) {
  return (
    <div style={{ width: "20%" }}>
      <li style={{ listStyleType: "none", margin: "3%" }}>
        <h3 style={{ color: "blue" }}>{name}</h3>
        <img
          alt="img"
          style={{
            width: "60%",
            borderRadius: "50%",
            padding: "0.25%",
            border: "1px orange solid",
            marginBottom: "3%",
            marginTop: "3%",
          }}
          src={image}
        ></img>
        <div>
          <Button
            style={{ width: "60%", marginTop: "1%", fontSize: "60%" }}
            type="button"
            className="btn btn-primary"
          >
            <Link to={`/users/${id}`}>My Profile</Link>
          </Button>
        </div>
      </li>
    </div>
  );
}
