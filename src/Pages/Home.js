import React, { useContext } from "react";
import "./Home.scss";
import { AlsContext } from "../Context/AlsContext";
import Navbar from "../Nav/Navbar";

function Home() {
  const { myValue, setMyValue } = useContext(AlsContext);

  return (
    <div className="home">
      <Navbar />
      <h1>{myValue}</h1>
    </div>
  );
}

export default Home;
