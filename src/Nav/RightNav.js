import React, { useState } from "react";
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

const RightNav = (props) => {
  const [close, setClose] = useState(false);

  function closeMe() {
    props.closeB(close);
  }

  return (
    <Ul open={props.open}>
      <NavLink
        exact
        to="/"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
        onClick={closeMe}
      >
        Home
      </NavLink>
      {/*<NavLink
        exact
        to="/About"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
        onClick={closeMe}
      >
        About
      </NavLink>*/}
      <NavLink
        exact
        to="/Enroll"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
        onClick={closeMe}
      >
        Enrollment
      </NavLink>
      {/*<NavLink
        exact
        to="/Materials"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
        onClick={closeMe}
      >
        Learning Delivery/Intervention
      </NavLink>
      <NavLink
        exact
        to="/Contact"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
        onClick={closeMe}
      >
        Contact
      </NavLink>*/}
    </Ul>
  );
};

export default RightNav;
