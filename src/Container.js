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
import SignUp from "./Pages/SignUp";
import { AlsContext } from "./Context/AlsContext";
import "./App.scss";

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
  //const { location } = useContext(__RouterContext);
  const [myValue, setMyValue] = useState("Home Page");

  return (
    <AlsContext.Provider value={{ myValue, setMyValue }}>
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
                <Route path="/SignUp" component={SignUp} />
                <Route path="/Enroll" component={Enroll} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    </AlsContext.Provider>
  );
}

export default withRouter(Container);
