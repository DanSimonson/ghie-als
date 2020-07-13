import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Materials from "./Pages/Materials";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { AlsContext } from "./Context/AlsContext";
import "./App.scss";

function App() {
  const [myValue, setMyValue] = useState("Home Page");

  return (
    <AlsContext.Provider value={{ myValue, setMyValue }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Materials" component={Materials} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
        </Switch>
      </Router>
    </AlsContext.Provider>
  );
}

export default App;
