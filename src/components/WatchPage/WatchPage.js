import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

import VideoMetaData from "./VideoMetaData";
import Comments from "../Comments/Comments";
import RecommendVideo from "./RecommendVideo";

const MainContainer = styled.div`
  width: 100%;
`;

const VideoPlayer = styled.div`
  border: 3px solid green;
  width: 100%;
  height: 60vh;
  background: #353946;
  margin-bottom: 2rem;
`;

function WatchPage() {
  return (
    <MainContainer>
      <Row>
        <Col lg={8}>
          <VideoPlayer>
            <iframe
              // src={`https://www.youtube.com/embed/${id}`}
              //테스트
              src={`https://www.youtube.com/embed/bMdU_OT0fgU`}
              // src={"https://www.youtube.com/embed/EJjynuUbCQs"}
              frameBorder="0"
              title="test"
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
          </VideoPlayer>
          <VideoMetaData />
          <Comments />
        </Col>
        <Col lg={4}>
          {[...Array(10)].map(() => (
            <RecommendVideo />
          ))}
        </Col>
      </Row>
    </MainContainer>
  );
}

export default WatchPage;
