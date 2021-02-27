import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const MainContainer = styled.div`
  .cardWrap {
    display: block;
    color: #ddd;
    &:hover {
      text-decoration: none;
    }
    .card {
      border: none;
      background: transparent;
      .card-body {
        .card-title {
        }
        .card-text {
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

function VideoSubscribe() {
  return (
    <MainContainer>
      <a href="#" className="cardWrap">
        <Card style={{ width: "" }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150X100" />
          <Card.Body>
            <Card.Title>내가 구독한 동영상 1</Card.Title>
            <Card.Text>
              <span>
                팀튜브
                <br />
                조회수 10 · 1일전
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </MainContainer>
  );
}

export default VideoSubscribe;
