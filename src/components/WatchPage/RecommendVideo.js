import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import numeral from "numeral";
import { Col, Row } from "react-bootstrap";

const MainContainer = styled.div`
  cursor: pointer;

  .rowStyle {
    margin: 0.25rem;
    padding: 0.5rem 0;
    align-items: center;
  }

  .leftSide {
    position: relative;
    text-align: center;
    padding-left: 0 !important;

    .thumbnail {
      width: 100%;
    }
  }

  .rightSide {
    padding: 0;

    .title {
      margin-bottom: 0.25rem;
      font-size: 0.95rem;
      // color: #fff;
      letter-spacing: 0.3px;

      //line clamp(2)
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; //line clamp(2)
      -webkit-box-orient: vertical;
    }
    .details {
      font-size: 0.9rem;
    }
  }

  .duration {
    position: absolute;

    bottom: 0.6rem;
    right: 1.2rem;

    font-size: 0.9rem;
    padding: 0.2rem;
    background: #080808ec;
    border-radius: 3px;
  }

  .channel {
    display: flex;
    align-items: center;
    margin: 0.25rem 0;
    /* img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-right: 0.5rem;
      cursor: pointer;
    } */
    p {
      font-size: 0.9rem;

      //line clamp(1)
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }

  @media (max-width: 520px) {
    font-size: 0.8rem;

    .details {
      //line clamp(1)
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .channel {
      margin: 0.1rem 0;
      /* img {
          display: none;
        } */
      p {
        font-size: 0.8rem;
      }
    }

    /* .desc {
        display: none;
      } */
    .title {
      font-size: 0.9rem;
      //line clamp(1)
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
`;

function RecommendVideo() {
  // const [duration, setDuration] = useState(null);

  // const seconds = moment.duration(duration).asSeconds();
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <MainContainer>
      <Row className="rowStyle">
        <Col className="leftSide" xs={6} md={4}>
          <img
            className="thumbnail"
            src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMDZfOTkg/MDAxNTgzNDI0MDM0NDcw.DC2NxC9vWGjQDYCmk9oCfA6D7lpB9ZArjKCSJIoIKvEg.PIcnlaRumcpU-he6bY5i3gw4jsY4S1Cp1cfA4xLProEg.PNG.likelotos/%EC%A0%9C%EB%AA%A9%EC%9D%84_%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94._1_(3).png?type=w800"
            alt="thumbnail"
          />
          <span className="duration">{_duration}</span>
        </Col>
        <Col className="rightSide" xs={6} md={8}>
          <p className="title">
            임시 타이틀임시 타이틀임시 타이틀임시 타이틀임시 타이틀
          </p>
          <div className="details">
            조회수 {numeral(100000).format("0.a")}회 •
            {moment("2021-02-21").fromNow()}
          </div>
          <div className="channel">
            <p>channel name</p>
          </div>
        </Col>
      </Row>
    </MainContainer>
  );
}

export default RecommendVideo;
