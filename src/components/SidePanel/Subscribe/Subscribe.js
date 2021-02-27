import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import VideoSubscribe from "./VideoSubscribe";

const MainContainer = styled.div`
  .MainContianer {
    paddingleft: 250px;
    .subscribeWrap {
    }
  }
`;
const Subscribe = function Subscribe() {
  return (
    <MainContainer>
      <h2 className="my-5 ml-3">Subscribe Page</h2>
      <div className="subscribeWrap">
        <Container fluid>
          <Row>
            {[...Array(12)].map(() => (
              <Col md={6} lg={3}>
                <VideoSubscribe />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </MainContainer>
  );
};

export default Subscribe;
