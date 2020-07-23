import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color: #fff;
  }
  @media (max-width: 768px) {
    z-index: 20;
    flex-flow: column nowrap;
    position: fixed;
    background-color: #0d2538;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <NavLink
        exact
        to="/"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/About"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
      >
        About
      </NavLink>
      <NavLink
        exact
        to="/Enroll"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
      >
        Enrollment
      </NavLink>
      <NavLink
        exact
        to="/Materials"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
      >
        Learning Delivery/Intervention
      </NavLink>
      <NavLink
        exact
        to="/Contact"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
      >
        Contact
      </NavLink>
      {/*<NavLink
        exact
        to="/SignUp"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
      >
        SignUp
      </NavLink>*/}
      {/** 
       <li>About ALS</li>
      <li>Enrollment</li>
      <li>Learning Material</li>
      <li>Contact</li>
      <li>ALS Sign Up</li>
       */}
    </Ul>
  );
};

export default RightNav;
