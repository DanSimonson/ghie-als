import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  __RouterContext,
} from "react-router-dom";
import Container from "./Container";
import Navbar from "./Nav/Navbar";
import { AlsContext } from "./Context/AlsContext";

function App() {
  const [user, setUser] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  return (
    <AlsContext.Provider value={{ user, setUser, errorOpen, setErrorOpen }}>
      <Router>
        <div>
          <Navbar />
          <Container />
        </div>
      </Router>
    </AlsContext.Provider>
  );
}
/*const App = () => (
  <Router>
    <div>
      <Navbar />
      <Container />
    </div>
  </Router>
);*/
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
