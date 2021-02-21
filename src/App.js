import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import SidePanel from "./components/SidePanel/SidePanel";
import Login from "./components/NavBar/LoginSignUp/Login";
import SignUp from "./components/NavBar/LoginSignUp/SignUp";
import HotVideo from "./components/SidePanel/HotVideo/HotVideo";
import Subscribe from "./components/SidePanel/Subscribe/Subscribe";
import WatchPage from "./components/WatchPage/WatchPage";
import Upload from "./components/NavBar/Upload/Upload";

const GlobalContainer = styled.div`
  /* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"); */

  /* $text-color: #b1bdb4; */
  /* $black-primary: #16181b; */
  /* $blackSecondary: #121417; */
  /* $bordeColor: #4c4c4c; */

  /* $breakpointMedium: 1224px;
  $breakpointSmall: 520px; */
  /*  */
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  background: #16181b;
  background-attachment: fixed;

  color: #b1bdb4;
  /* font-family: "Roboto", sans-serif; */
  /* letter-spacing: 0.1px; */
`;

const MainFrame = ({ children }) => {
  const [toggleSidePanel, setToggleSidePanel] = useState(false);

  const handleToggleSidePanel = () => {
    setToggleSidePanel((value) => !value);
  };

  return (
    <>
      <NavBar handleToggleSidePanel={handleToggleSidePanel} />
      <div style={{ height: "95vh", display: "flex" }}>
        <SidePanel
          toggleSidePanel={toggleSidePanel}
          handleToggleSidePanel={handleToggleSidePanel}
        />
        <Container fluid>{children}</Container>
      </div>
    </>
  );
};

function App() {
  return (
    <GlobalContainer>
      <Switch>
        <Route path="/" exact>
          <MainFrame>
            <MainPage />
          </MainFrame>
        </Route>

        <Route path="/home">
          <MainFrame>
            <MainPage />
          </MainFrame>
        </Route>

        <Route path="/hotvideo">
          <MainFrame>
            <HotVideo />
          </MainFrame>
        </Route>

        <Route path="/subscribe">
          <MainFrame>
            <Subscribe />
          </MainFrame>
        </Route>

        {/* <Route path="/watch"> */}
        <Route path="/watch/:id">
          <MainFrame>
            <WatchPage />
          </MainFrame>
        </Route>

        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/Upload" component={Upload} />

        {/* 없는 페이지로 이동시 메인으로 이동 */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </GlobalContainer>
  );
}

export default App;
