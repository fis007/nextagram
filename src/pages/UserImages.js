import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserImages({ id }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // performing a GET request
    axios
      .get(`https://insta.nextacademy.com/api/v1/images?userId=${id}`)

      .then((result) => {
        // If successful, we do stuffs with 'result'
        setImages(result.data);
      })
      .catch((error) => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }, [id]);
  return (
    <div style={{ width: "80%" }}>
      {images.map((image) => {
        return (
          <img
            alt="img"
            style={{
              width: "80px",
              height: "80px",
              marginRight: "2%",
              marginBottom: "2%",
            }}
            src={image}
          />
        );
      })}
    </div>
  );
}
