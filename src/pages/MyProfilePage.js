import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MyProfilePage() {
  const [images, setImages] = useState([]);
  let jwt = localStorage.getItem("jwt");
  console.log(jwt);

  useEffect(() => {
    // performing a GET request
    axios
      .get("https://insta.nextacademy.com/api/v1/images/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((result) => {
        // If successful, we do stuffs with 'result'
        console.log(result.data);
        setImages(result.data);
        console.log(images);
      })
      .catch((error) => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }, [jwt]);

  return (
    <div>
      {console.log(images)}
      {images.map((img) => (
        <img style={{ width: "40%", margin: "1%" }} src={img} />
      ))}
    </div>
  );
}
