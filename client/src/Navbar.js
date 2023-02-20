import { useState } from "react";
import styled from "styled-components";
import logo from "./Images/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const signInOut = () => setLoggedIn(!loggedIn);

  return (
    <nav>
      <div className="navbar-wrapper">
        <div>
            <img src={logo} alt="logo" className="logo"></img>
        </div>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <Ul open={open}>
            <li>
              <a href="/about" className="link">About Us</a>
            </li>
            <li>
              <a href="/syllabus" className="link">Syllabus</a>
            </li>
            <li >
              <button className="link" id="logInOut" onClick={signInOut}>{loggedIn ? "Sign Out" : "Log In"}</button>
            </li>
        </Ul>
        </div>
    </nav>
  );
};





const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  padding-top: 10px;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: black;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  li {
    padding: 1rem;
    
    a {
        color: black;
        text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #F2EFF0;
    position: fixed;
    transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: black;
      text-decoration: none;
    }
  }
`;

export default Navbar;