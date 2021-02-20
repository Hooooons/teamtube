import React from "react";
import styled from "styled-components";

import Video from "../Video/Video";

import { Col, Container, Row } from "react-bootstrap";

const MainContainer = styled.div`
  /* border: 2px solid blue; */
  padding-top:30px;
  background:#fff;
`;

function MainPage() {
  //임시코드
  return (
    <MainContainer>
      <Container>
        <Row>
          {[...new Array(20)].map(() => (
            <Col lg={3} md={4}>
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    </MainContainer>
  );
}

export default MainPage;
