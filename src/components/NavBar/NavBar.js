import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps, MdExitToApp } from "react-icons/md";

import { useSelector } from "react-redux";
import firebase from "../../firebase";

// import { Form, Button } from "react-bootstrap";import { FaBars } from "react-icons/fa";

const MainContainer = styled.div`
  /* border: 2px solid red; */
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 8vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.5rem;
  background: #212121;

  /* position: fixed;
  z-index: 1; */

  .menu {
    display: none;
  }
  .logo {
    width: 30px;
    height: 30px;
    object-fit: contain;
    display: block;
  }
  .formStyle {
    display: flex;
    flex: 0.6;
    padding: 0.1rem;
    margin: 0 1rem;

    border: 1.2px solid #313131;
    background-color: #121417;
    border-radius: 3px;
  }
  .inputStyle {
    width: 100%;
    border: none;
    font-weight: 500;
    background: transparent;
    padding: 0.3rem;
    color: #b1bdb4;
    /* 부트스트랩 기존 스타일링 때문에 안먹힘 */
    /* &:focus {
      outline: none;
    } */
  }
  .iconsStyle {
    display: flex;
    flex: 0.15;
    justify-content: space-around;
    align-items: center;
  }
  .userImg {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    /* object-fit: contain; */
    object-fit: cover;
    margin-left: 5px;
  }

  button {
    color: #b1bdb4;
    /* background: transparent; */
    background: #313131;
    border: none;
    padding: 0 1.25rem;
    margin-left: 0.1rem;
    &:focus {
      border: none;
    }
  }

  @media (max-width: 520px) {
    padding: 1rem;
    form {
      flex: 1;
    }
    .menu {
      display: block;
    }
    .logo {
      /* display: none; */
    }
  }
`;

const LeftSideAndSearch = ({ handleToggleSidePanel }) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaBars
          // className="menu"
          onClick={() => handleToggleSidePanel()}
          size={26}
          style={{ marginRight: "2rem", cursor: "pointer" }}
        />
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="logo"
              alt="logo"
              src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
            />
            <span
              style={{
                color: "white",
                fontSize: "1.6rem",
                fontWeight: "bold",
                marginLeft: "0.2rem",
                userSelect: "none",

                position: "relative",
                bottom: "0.1rem",
              }}
            >
              TeamTube
            </span>
          </div>
        </Link>
      </div>

      {/* 부트스트랩은 스타일이 안맞음 */}
      {/* <Form className="formStyle">
        <Form.Group controlId="Search">
          <Form.Control className="inputStyle" type="text" placeholder="검색" />
        </Form.Group>
        <Button type="submit">
          <AiOutlineSearch size={22} />
        </Button>
      </Form> */}
      <form className="formStyle">
        <input className="inputStyle" type="text" placeholder="검색" />

        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
    </>
  );
};

function NavBar() {
  const user = useSelector((state) => state.userReducer.currentUser);

  // console.log("user", user.displayName);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  if (user) {
    return (
      <MainContainer>
        <LeftSideAndSearch />

        <div className="iconsStyle">
          <MdNotifications size={28} />
          <MdApps size={28} />
          {/* 유저 이미지 들어가야함 */}
          <img
            className="userImg"
            alt="userImage"
            // src="https://pbs.twimg.com/media/ByyGcEFCcAAT08c.jpg"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOSAtdgC9phrregGGU_QkHwjKQH8I5VCNeg&usqp=CAU"
            src="https://media.tenor.com/images/d5f2a10b8bc415dc3aa26764d77984b3/tenor.gif"
          />
          <MdExitToApp size={28} />
          <span onClick={handleLogout}>로그아웃</span>
        </div>
      </MainContainer>
    );
  } else {
    return (
      <MainContainer>
        <LeftSideAndSearch />

        <div style={{ cursor: "pointer" }}>
          <span>
            <Link to="signup">회원가입</Link>
          </span>
          <span>/</span>
          <span>
            <Link to="login">로그인</Link>
          </span>
        </div>
      </MainContainer>
    );
  }
}

export default NavBar;
