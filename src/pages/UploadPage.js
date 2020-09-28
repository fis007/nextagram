import React, { useState } from "react";
import { FormText, InputGroup, Form, FormGroup, Button } from "react-bootstrap";
import axios from "axios";

const UploadPage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmitFile = (e) => {
    // Prevent the default behaviour of the form submitting
    e.preventDefault();
    // Authorization of the user
    let JWT = localStorage.jwt;
    // Formdata object to hold the image file to send to the server
    let formData = new FormData();
    // Append the key:value pair to the formData object
    formData.append("image", imageFile);

    axios
      .post("https://insta.nextacademy.com/api/v1/images/", formData, {
        headers: { Authorization: `Bearer ${JWT}` },
      })
      .then((response) => {
        if (response.data.success) {
          setMessage("Image Uploaded Successfully!");
          setPreviewImage(null);
          setImageFile(null);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const imageOnChange = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
  };
  return (
    <div>
      <Form onSubmit={(e) => handleSubmitFile(e)}>
        <FormGroup>
          <Form.Control
            type="file"
            name="image-file"
            multiple={false}
            onChange={(e) => imageOnChange(e)}
          />
          <FormText color="muted">
            Make sure the image being uploaded is a supported format.
          </FormText>
        </FormGroup>
        <Button type="submit" color="primary">
          Upload
        </Button>
      </Form>
      <div className="card">
        {previewImage ? (
          <img src={previewImage} width="50%" height="50%" />
        ) : (
          <h3 className="text-center">{message ? message : "Live Preview"}</h3>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
