import React from "react";
import styled from "styled-components";
import moment from "moment";
import numeral from "numeral";

const MainContainer = styled.div`
  width: 100%;
`;
const Top = styled.div``;
const Channel = styled.div``;
const Description = styled.div``;

function VideoMetaData() {
  return (
    <MainContainer>
      <Top>
        <h5>ViedeoTitle</h5>
        <div>
          <span>
            {numeral(10000).format("0.a")} Views •{" "}
            {moment("2021-02-21").fromNow()}
          </span>
        </div>
      </Top>
      <Channel></Channel>
      <Description></Description>
      <div>VideoMetaData</div>
    </MainContainer>
  );
}

export default VideoMetaData;
