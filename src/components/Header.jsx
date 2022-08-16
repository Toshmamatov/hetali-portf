import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/header-logo.png" />

      <NavMenu>
        <a>
          <span>ABOUT US</span>
        </a>
        <a>
          <span>PROJECTS</span>
        </a>
        <a>
          <span>DIVERSIFICATION</span>
        </a>
        <a>
          <span>OUR PROCESS</span>
        </a>
        <a>
          <span>TESTIMONIALS</span>
        </a>
        <a>
          <span>CAREERS</span>
        </a>
        <a>
          <span>CONTACT US</span>
        </a>
      </NavMenu>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  height: 70px;
  background: #fff;
  padding: 5px 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 150px;
  margin-right: 50px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-content: center;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    cursor: pointer;

    img {
      width: 20px;
      margin-right: 5px;
    }

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.03em;
      color: #4f4f4f;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: linear-gradient(90deg, #0f497e 0%, #53caf5 109.3%);

        position: absolute;
        right: 0;
        left: 0;
        width: 30px;
        bottom: -6px;
        opacity: 1;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(1);
      }
    }

    /* &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    } */
  }
`;
