<<<<<<< HEAD
import React from "react";
import NavBar from "../NavBar";
=======
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Form, Button } from "react-bootstrap";
>>>>>>> master

import { AiOutlinePlus } from "react-icons/ai";
import DropZone from "react-dropzone";
import NavBar from "../NavBar";

const MainContainer = styled.div`
  h1 {
    text-align: center;
  }
  .uploadWrap {
    height: 100%;
    width: 700px;
    margin: 0 auto;
    padding: 3rem 0;
  }
`;
const PrivateOptions = [
  { value: 0, label: "Private" },
  { value: 1, label: "Public" },
];
function Upload() {
<<<<<<< HEAD
  return (
    <div>
      <NavBar />
      upload
    </div>
=======
  const [Private, setPrivate] = useState(0);
  const [VideoTitle, setVideoTitle] = useState("");
  const [VideoDesc, setVideoDesc] = useState("");

  const onTitleChange = (e) => {
    console.log(e.currentTarget);
    setVideoTitle(e.currentTarget.value);
  };

  const onDescChange = (e) => {
    setVideoDesc(e.currentTarget.value);
  };

  const onPrivateChange = (e) => {
    setPrivate(e.currentTarget.value);
  };

  return (
    <>
      <MainContainer>
        <NavBar />
        <div className="uploadWrap">
          <h1>업로드 페이지입니다.</h1>
          {/* onsubmit */}
          <form action="">
            <div>
              {/* dropzon */}
              <DropZone onDrop multiple maxSize>
                {({ getRootProps, getInputProps }) => (
                  <div
                    style={{
                      width: "300px",
                      height: "240px",
                      border: "1px solid lightgray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <AiOutlinePlus size={34} />
                  </div>
                )}
              </DropZone>

              {/* thumnail */}
              <div>
                <img src="" alt="" />
              </div>
              {/* input */}

              <Form.Group>
                <Form.Label>Private</Form.Label>
                <Form.Control as="select" OnChange={onPrivateChange}>
                  {PrivateOptions.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="videoTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  OnChange={onTitleChange}
                  Value={VideoTitle}
                />
                <Form.Text className="text-muted">
                  Enter your video title.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  OnChange={onDescChange}
                  Value={VideoDesc}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w100"
                size="lg"
              >
                업로드
              </Button>
            </div>
          </form>
        </div>
      </MainContainer>
    </>
>>>>>>> master
  );
}

export default Upload;
