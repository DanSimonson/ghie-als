import React, { useState, useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AlsContext } from "../Context/AlsContext";
//import SignedInLinks from "../Components/SignedInLinks";
//import SignedOutLinks from "../Components/SignedOutLinks";

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

const SignedInLinks = (props) => {
  const [close, setClose] = useState(false);
  const { user, setUser } = useContext(AlsContext);
  const navProps = useContext(AlsContext);
  console.log("in RightNav navProps: ", navProps);
  console.log("props: ", props);
  //  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  //const links = navProps.user !== "" ? <SignedInLinks /> : <SignedOutLinks />;
  function closeMe() {
    props.closeB(close);
  }
  // open={props.open}
  return (
    <Ul>
      <NavLink
        exact
        to="/"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
        onClick={closeMe}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/About"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
        onClick={closeMe}
      >
        About
      </NavLink>
      <NavLink
        exact
        to="/Enroll"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
        onClick={closeMe}
      >
        Enrollment
      </NavLink>
      <NavLink
        exact
        to="/Login"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
        onClick={closeMe}
      >
        Login
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

export default SignedInLinks;
