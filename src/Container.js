import React, { useState, useContext } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Pages/Home";
import Materials from "./Pages/Materials";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Enroll from "./Pages/Enroll";
import Login from "./Pages/Login";
import SignedUp from "./Pages/SignedUp";
//import { AlsContext } from "./Context/AlsContext";
import "./Styles.scss";

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

function Container({ location }) {
  const [myValue, setMyValue] = useState("Home Page");
  const [user, setUser] = useState("");
  //{/*</AlsContext.Provider>*/}
  //{/*<AlsContext.Provider value={{ myValue, setMyValue, user, setUser }}>*/}
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Materials" component={Materials} />
              <Route path="/Contact" component={Contact} />
              <Route path="/About" component={About} />
              <Route path="/Enroll" component={Enroll} />
              <Route path="/Login" component={Login} />
              <Route path="/Materials" component={Materials} />
              <Route path="/SignedUp" component={SignedUp} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

export default withRouter(Container);
