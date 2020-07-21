import React, { useContext } from "react";
import "./Home.scss";
import { AlsContext } from "../Context/AlsContext";
import Navbar from "../Nav/Navbar";
import { Carousel } from "react-bootstrap";

function Home() {
  const { myValue, setMyValue } = useContext(AlsContext);

  return (
    <>
      <Navbar />

      <Carousel>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dmglopmul/image/upload/v1595355377/ghie-als/iloveals.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dmglopmul/image/upload/v1595355054/ghie-als/studentstwoals.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dmglopmul/image/upload/v1595355984/ghie-als/ghieenrollals.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
