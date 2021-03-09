import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
// import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import SidePanel from "./components/SidePanel/SidePanel";

// import Login from "./components/NavBar/LoginSignUp/Login";
// import SignUp from "./components/NavBar/LoginSignUp/SignUp";

import HotVideo from "./components/SidePanel/HotVideo/HotVideo";
import Subscribe from "./components/SidePanel/Subscribe/Subscribe";
import WatchPage from "./components/WatchPage/WatchPage";
import Upload from "./components/NavBar/Upload/Upload";

// 임시
import Login from "./components/NavBar/LoginSignUp/Login_kks";
import SignUp from "./components/NavBar/LoginSignUp/SignUp_hoon";
//리덕스
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "./redux/user_redux";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import firebase from "./firebase";
//임시

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
  .pageContent {
    //페이지 컨텐트 잠시보류
    /* padding-left: 250px; */
  }
`;

const MainFrame = ({ children }) => {
  const [toggleSidePanel, setToggleSidePanel] = useState(false);

  const handleToggleSidePanel = () => {
    setToggleSidePanel((value) => !value);
  };

  //임시
  let history = useHistory();
  let dispatch = useDispatch();

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     // console.log("user", user);

  //     // 로그인이 된 상태
  //     if (user) {
  //       history.push("/");
  //       dispatch(setUser(user));
  //     } else {
  //       // 로그인이 되지 않은 상태.
  //       history.push("/");
  //       dispatch(clearUser());
  //     }
  //   });
  // }, [history, dispatch]);
  //임시

  return (
    <>
      <NavBar handleToggleSidePanel={handleToggleSidePanel} />

      <div
        style={{
          display: "flex",
          paddingTop: "8vh",
          position: "relative",
          height: "100%",
        }}
      >
        <SidePanel
          toggleSidePanel={toggleSidePanel}
          handleToggleSidePanel={handleToggleSidePanel}
        />
        <Container
          // fluid
          className="pageContent"
        >
          {children}
        </Container>
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
