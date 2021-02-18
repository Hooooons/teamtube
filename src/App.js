import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import SidePanel from "./components/SidePanel/SidePanel";

const GlobalContainer = styled.div`
  /* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"); */

  /* $text-color: #b1bdb4; */
  /* $black-primary: #16181b; */
  /* $blackSecondary: #121417; */
  /* $bordeColor: #4c4c4c; */

  /* $breakpointMedium: 1224px;
  $breakpointSmall: 520px; */

  margin: 0;
  padding: 0;
  box-sizing: border-box;

  background: #17181b;
  background-attachment: fixed;

  color: #b1bdb4;
  /* font-family: "Roboto", sans-serif; */
  /* letter-spacing: 0.1px; */
`;

function App() {
  return (
    <GlobalContainer>
      <NavBar />
      <div style={{ height: "100vh", display: "flex" }}>
        <SidePanel />
        <Container fluid style={{ border: "3px solid blue" }}>
          <MainPage style={{ overflowY: "scroll" }} />
        </Container>
      </div>
    </GlobalContainer>
  );
}

export default App;
