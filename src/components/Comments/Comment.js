import React from "react";
import styled from "styled-components";
import moment from "moment";

const MainContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  /* border-bottom: 2px solid #606060; */
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

const CommentBody = styled.div`
  .userName {
    color: #fff;
    margin-bottom: 0.25rem;
  }
`;

function Comment() {
  return (
    <MainContainer>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOSAtdgC9phrregGGU_QkHwjKQH8I5VCNeg&usqp=CAU"
        alt="userImg"
      />
      <CommentBody>
        <p className="userName">username • {moment("2021-02-22").fromNow()}</p>
        <p style={{ marginBottom: "0" }}>Nice video~</p>
      </CommentBody>
    </MainContainer>
  );
}

export default Comment;
