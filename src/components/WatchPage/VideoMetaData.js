import React from "react";
import styled from "styled-components";
import moment from "moment";
import numeral from "numeral";
import ShowMoreText from "react-show-more-text";

import { MdThumbUp, MdThumbDown } from "react-icons/md";

const MainContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
`;
const Top = styled.div`
  span {
    cursor: pointer;
  }
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0; //부트스트랩 py-3
  margin: 0.5rem 0; //부트스트랩 my-2

  border-top: 0.2px solid #4c4c4c;
  border-bottom: 0.2px solid #4c4c4c;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  button {
    background-color: red;
    color: #fff;
    border-radius: 1px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    :hover {
      color: #fff;
    }
    :focus {
      border: 1px;
      outline: none;
    }
  }
`;
const Description = styled.div`
  font-size: 0.9rem;
  white-space: pre-line;
  border-bottom: 0.2px solid #4c4c4c;
  .showMoreText {
    text-decoration: none;
    display: block;
    margin: 1rem 0;
    color: #fff;
    font-weight: 500;
  }
`;

function VideoMetaData() {
  return (
    <MainContainer>
      <Top>
        <h5>ViedeoTitle</h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.25rem 0",
          }}
        >
          <span>
            {numeral(10000).format("0.a")} Views •{" "}
            {moment("2021-02-21").fromNow()}
          </span>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "1rem" }}>
              <MdThumbUp size={26} /> {numeral(1000).format("0.a")}
            </span>
            <span style={{ marginRight: "1rem" }}>
              <MdThumbDown size={26} /> {numeral(3).format("0.a")}
            </span>
          </div>
        </div>
      </Top>
      <Channel>
        <div style={{ display: "flex" }}>
          <img
            src="https://pbs.twimg.com/media/ByyGcEFCcAAT08c.jpg"
            alt="channelImg"
            style={{
              borderRadius: "50%",
              marginRight: "1rem",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>ChannelName</span>
            <span>{numeral(10000).format("0.a")} Subscribers</span>
          </div>
        </div>
        <button style={{ border: "none", padding: "0.5rem", margin: "0.5rem" }}>
          Subscribe
        </button>
      </Channel>
      <Description>
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          영상 설명영상 설명영상 설명영상 설명영상 설명영상 설명영상 설명영상
          설명영상 설명영상 설명영상 설명영상 설명영상 설명영상 설명영상
          설명영상 설명영상 설명영상 설명영상 설명영상 설명영상 설명영상
          설명영상 설명영상 설명영상 설명영상 설명영상 설명영상 설명영상
          설명영상 설명영상 설명영상 설명영상 설명영상 설명영상 설명영상
          설명영상 설명영상 설명영상 설명
        </ShowMoreText>
      </Description>
    </MainContainer>
  );
}

export default VideoMetaData;
