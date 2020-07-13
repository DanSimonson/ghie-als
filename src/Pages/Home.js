import React, { useContext } from "react";
import "./Home.scss";
import { AlsContext } from "../Context/AlsContext";

function Home() {
  const { myValue, setMyValue } = useContext(AlsContext);

  return (
    <div className="home">
      <h1>{myValue}</h1>
    </div>
  );
}

export default Home;
