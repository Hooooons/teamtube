import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CardForm = styled(Link)`
  min-height:280px;
  :hover {
    text-decoration:none;
  }

  .card {
    border:none;
    border-radius:0;

    .main_img {
      border-radius:0;
    }
  }
`;
const CardFormVisul = styled.div`
  position:relative;
`;
const CardFormProgressBar = styled.div`
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  height:4px;
  background:#ccc;
`;
const CardFormProgress = styled.div`
  position:absolute;
  left:0;
  bottom:0;
  height:100%;
  background:#f00;
`;
const BlockForm = styled.div`
  display:flex;
  padding:12px 0 20px;

  .card-img-top {
    width:36px;
    height:36px;
    margin-right:10px;
    border-radius:50%;
  }
  .blockquote {
    flex:1;
    padding-right:5px;

    .card-title {
      display:-webkit-box;
      overflow:hidden;
      font-size:14px;
      color:#333;
      text-overflow:ellipsis;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
    }
    .card-text {
      margin:0;
      font-size:14px;
      line-height:1.5em;
      color:#333;

      span {
        padding:0;
        font-size:14px;
        color:#333;
      }
    }
  }
`;
const CardMoreBtn = styled.div`
  width:24px;
  height:24px;

  button {
    position:relative;
    width:100%;
    height:100%;
    vertical-align:top;
    border:none;
    border-radius:50%;
    background:#fff;
        
    span {
      position:absolute;
      left:50%;
      top:2px;
      width:4px;
      height:4px;
      border-radius:50%;
      background:#ccc;
      transform:translateX(-50%);

      &:before,
      &:after {
        content:"";
        position:absolute;
        left:50%;
        width:4px;
        height:4px;
        border-radius:50%;
        background:#ccc;
        transform:translateX(-50%);
      }
      &:before {
        top:7px;
      }
      &:after {
        top:13px;
      }
    }
  }
`;

function Video() {
  return (
  <>
    {/* Card 리스트 */}
    <CardForm>
      <Card>
        {/* Card 비쥬얼 */}
        <CardFormVisul>
          <Card.Img  className="main_img" variant="top" src="https://i.ytimg.com/vi/8ctK8bbVx6I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBynXngZcvocYAllJYgwWwV6gY3vw" />
          <CardFormProgressBar>
            <CardFormProgress style={{ width:'80%' }}></CardFormProgress>
          </CardFormProgressBar>
        </CardFormVisul>
        {/* //Card 비쥬얼 */}

        {/* Card 컨텐츠 */}
        <blockquote className="blockquote mb-0">
          <BlockForm>
            <Card.Img variant="top" src="https://yt3.ggpht.com/ytc/AAUvwnjtZs7T9mKvPWXkrvWOWpco_WU1sf1M-srg5I3NHw=s68-c-k-c0x00ffffff-no-rj" />
            <blockquote className="blockquote mb-0">
              <Card.Title>
                #집에서함께해요 봄이 오기 전에 겨울특집 확장판 몰아보기(120회 이후 회차 포함) // 사골 스트리밍 [맛있는 녀석들_Tasty Guys]
              </Card.Title>
              <Card.Text>
                디글 클래식 :Diggle Classic
              </Card.Text>
              <Card.Text>
                조회수 1만회 • 3일 전
              </Card.Text>
            </blockquote>
            <CardMoreBtn>
              <button type="button">
                <span></span>
              </button>
            </CardMoreBtn>
          </BlockForm>
        </blockquote>
        {/* //Card 컨텐츠 */}
      </Card>
    </CardForm>
    {/* //Card 리스트 */}
  </>
  );
}

export default Video;
