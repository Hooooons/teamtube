import React from 'react';
import styled from "styled-components";
import { Card } from "react-bootstrap";

const MainContainer = styled.div`
  .wrap {
    .card {
      border:none;
    }
  }
`;

function VideoSubscribe(){
  return(
    <MainContainer>

    <a href="#" className='wrap'>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://placeholder.com/100px180" />
        <Card.Body>
          <Card.Title>내가 구독한 동영상 1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </a> 
    </MainContainer>

  );
 }

 export default VideoSubscribe;