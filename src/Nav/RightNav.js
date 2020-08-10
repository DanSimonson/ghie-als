import React, { useState, useContext } from "react";
import styled from "styled-components";
//import { NavLink } from "react-router-dom";
import { AlsContext } from "../Context/AlsContext";
import { auth } from "../Firebase";
import { useHistory } from "react-router";
import { withRouter, NavLink } from "react-router-dom";
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
  const history = useHistory();
  console.log("props:", props);

  const [close, setClose] = useState(false);
  const navProps = useContext(AlsContext);

  function closeMe() {
    props.closeB(close);
  }
  function logout() {
    history.push("/Login");
    window.location.reload();
    auth.signOut();
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
      {navProps.user === "" && (
        <NavLink
          exact
          to="/Login"
          className="nav-item nav-link"
          activeClassName="nav-item nav-link active"
          onClick={closeMe}
        >
          Login for Learning Material
        </NavLink>
      )}
      {/*<NavLink
        exact
        to="/Contact"
        className="nav-item nav-link"
        activeClassName="nav-item nav-link active"
        onClick={closeMe}
      >
        Contact
      </NavLink>*/}
      {navProps.user !== "" && (
        <>
          <NavLink
            exact
            to="/Materials"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
            onClick={closeMe}
          >
            Learning Deliverables
          </NavLink>
          <NavLink
            exact
            to="/SignedUp"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
            onClick={closeMe}
          >
            SignUp
          </NavLink>
          <NavLink
            exact
            to="/Login"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
            onClick={() => {
              closeMe();
              logout();
            }}
          >
            Sign Out
          </NavLink>
        </>
      )}
    </Ul>
  );
};

export default withRouter(RightNav);
