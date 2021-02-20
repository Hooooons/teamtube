import React from "react";
import { Card } from "react-bootstrap";

function Video() {
  return <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.ytimg.com/vi/mkgg9LC9Ibw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXc4IbNCSPRJ9YTNT6oTBSQpc6jQ" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>;
}

export default Video;
