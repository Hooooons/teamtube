import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Col , Row  } from "react-bootstrap";

import VideoSubscribe from "./VideoSubscribe";


const MainContainer = styled.div`

`
const Subscribe = 
function Subscribe() {
  return (
   <MainContainer>
    <Container>
      <Row>
        <Col sm={6} lg={3}>
      <VideoSubscribe />
      </Col>
      <Col sm={6} lg={3}>
      <VideoSubscribe />
      </Col>
      <Col sm={6} lg={3}>
      <VideoSubscribe />
      </Col>
      <Col sm={6} lg={3}>
      <VideoSubscribe />
      </Col>
    </Row>
    </Container>
  </MainContainer>
  );
}

export default Subscribe;
