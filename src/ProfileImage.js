import React from "react";
import { Button } from "react-bootstrap";

export default function ProfileImage({ id, name, image }) {
  return (
    <div style={{ width: "20%" }}>
      <li style={{ listStyleType: "none", margin: "3%" }}>
        <h3 style={{ color: "blue" }}>{name}</h3>
        <img
          style={{
            width: "60%",
            borderRadius: "50%",
            padding: "0.25%",
            border: "1px orange solid",
          }}
          src={image}
        ></img>
        <div>
          <Button
            style={{ width: "60%", marginTop: "1%", fontSize: "60%" }}
            type="button"
            class="btn btn-primary"
          >
            See More
          </Button>
        </div>
      </li>
    </div>
  );
}
