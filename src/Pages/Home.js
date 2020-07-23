import React, { useContext } from "react";
import "./Home.scss";
import { AlsContext } from "../Context/AlsContext";
import Navbar from "../Nav/Navbar";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div``;

function Home() {
  const { myValue, setMyValue } = useContext(AlsContext);

  return (
    <Wrapper>
      <section>
        <Carousel>
          <Carousel.Item className="text-secondary">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dmglopmul/image/upload/v1595356919/ghie-als/iloveals.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="text-dark">First slide label</h3>
              <p className="text-dark">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dmglopmul/image/upload/v1595357887/ghie-als/ghieCourt.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="text-dark">Second slide label</h3>
              <p className="text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dmglopmul/image/upload/v1595358749/ghie-als/ghieEnrol.Art.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="text-dark">Third slide label</h3>
              <p className="text-dark">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </Wrapper>
  );
}

export default Home;
