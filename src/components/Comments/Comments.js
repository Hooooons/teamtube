import React from "react";
import styled from "styled-components";

import Comment from "./Comment";

const MainContainer = styled.div``;
const CommentForm = styled.div`
  width: 100%;
  display: flex;
  margin: 0.5rem;

  img {
    border-radius: 50%;
    margin-right: 1rem;
  }
  form {
    display: flex;
    flex-grow: 1;
  }
  input {
    flex-grow: 1;
  }
  button {
    border: 0;
    padding: 0.5rem;
  }
`;
const CommentList = styled.div``;

function Comments() {
  const handleComment = () => {};

  return (
    <MainContainer>
      <p>123 Comments</p>
      <CommentForm>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOSAtdgC9phrregGGU_QkHwjKQH8I5VCNeg&usqp=CAU"
          alt="userImg"
        />
        <form onSubmit={handleComment}>
          <input type="text" placeholder="Write a comment.." />
          <button>Comment</button>
        </form>
      </CommentForm>
      <CommentList>
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </CommentList>
    </MainContainer>
  );
}

export default Comments;
