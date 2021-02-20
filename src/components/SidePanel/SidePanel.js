import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MdSubscriptions, MdHome } from "react-icons/md";
import { FaHotjar } from "react-icons/fa";

const MainContainer = styled.div`
  /* border: 2px solid green; */
  .sidebar {
    background: #212121;

    display: flex;
    flex-direction: column;

    width: 250px;
    height: 95vh;
    padding-top: 0.5rem;
    transition: transform 0.2s ease-in;

    position: sticky;
    top: 5vh;
    left: 0;

    /* a {
    color: #b1bdb4;
    &:hover {
      color: #b1bdb4;
      text-decoration: none;
    }
  } */

    li {
      display: flex;
      align-items: center;

      padding: 0.6rem 1.5rem;
      margin: 0.2rem 0;
      cursor: pointer;

      span {
        margin-left: 1rem;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.4px;
      }
      &:hover {
        background: #4c4c4c;
      }
    }

    .open {
      transform: translateX(0);
    }

    @media (max-width: 1224px) {
      width: 80px;
      li {
        display: block;
        justify-content: center;

        span {
          padding: 0;
          margin: 0;
          font-size: 0.5rem;
        }
      }
    }

    @media (max-width: 520px) {
      transform: translateX(-100%);
      position: fixed;
      z-index: 999;
    }
  }
`;

function SidePanel({ toggleSidePanel, handleToggleSidePanel }) {
  return (
    <MainContainer>
      <nav
        className={toggleSidePanel ? "sidebar open" : "sidebar"}
        // calssName={toggleSidePanel ? "open" : ""}
        onClick={() => handleToggleSidePanel(false)}
      >
        <Link to="/home" style={{ color: "#b1bdb4", textDecoration: "none" }}>
          <li>
            <MdHome size={26} />
            <span>Home</span>
          </li>
        </Link>

        <Link
          to="/hotvideo"
          style={{ color: "#b1bdb4", textDecoration: "none" }}
        >
          <li>
            <FaHotjar size={23} />
            <span>인기</span>
          </li>
        </Link>

        <Link
          to="/subscribe"
          style={{ color: "#b1bdb4", textDecoration: "none" }}
        >
          <li>
            <MdSubscriptions size={23} />
            <span>구독</span>
          </li>
        </Link>
      </nav>
    </MainContainer>
  );
}

export default SidePanel;
