import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Form, Button } from "react-bootstrap";

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
    .form-control {
      background: transparent;
      border: 1px solid #fff;
      border-radius: 0;
      color: #fff;
    }
  }
`;
const PrivateOptions = [
  { value: 0, label: "Private" },
  { value: 1, label: "Public" },
];
function Upload() {
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

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipark/form-data" },
    };
    formData.append("file", files[0]);
    console.log(files);

    // Axios.post("/api/video/uploadfiles," formData , config)
    // .then(response => {
    //   if(response.data.success){

    //   }else {
    //     alert('비디오 업로드를 실패했습니다.');
    //   }
    // })
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
              <DropZone onDrop={onDrop} multiple={false} maxSize={100000}>
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
                <Form.Control as="select" onChange={onPrivateChange}>
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
                  onChange={onTitleChange}
                  value={VideoTitle}
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
                  onChange={onDescChange}
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
  );
}

export default Upload;
