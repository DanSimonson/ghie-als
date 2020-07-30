import React, { useContext, useEffect } from "react";
import "./Home.scss";
import { AlsContext } from "../Context/AlsContext";
import Navbar from "../Nav/Navbar";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <>
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
                <p className="h6 text-black-50">
                  Welcome to Ghie's Online Classroom
                </p>
                {/*<h3 className="text-white overlay">
                  Welcome to Ghie's Online Classroom
                 </h3>*/}
                {/*<p className="overlay">
                  An interactive site dedicated to helping students reach their
                  full potential
                </p>*/}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dmglopmul/image/upload/v1595484089/ghie-als/ghieTeach.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <p className="h6 text-black-50">
                  Teaching in new normal setting
                </p>
                {/*<h3 className="text-white overlay">
                  Teaching in new normal setting
              </h3>*/}
                {/*<p className="text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>*/}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dmglopmul/image/upload/v1595358749/ghie-als/ghieEnrol.Art.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <p
                  style={{
                    borderTop: "1px solid red",
                    borderBottom: "1px solid red",
                  }}
                  className="h6 text-dark"
                >
                  Learning in a safe, motivating environment
                </p>
                {/*<h3 className="text-white overlay">
                  Learning in a safe, motivating environment
            </h3>*/}
                {/*<p className="text-dark">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>*/}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/*<div style={{ height: "100vh", backgroundColor: "#4fc3f7" }}></div>*/}
        </section>
        <div className="gridWrap">
          <div className="one">
            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1596129889/ghie-als/visionmission-768x591.jpg" />
          </div>
          <div className="two">
            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1596128621/ghie-als/DEPED_Mission.jpg" />
          </div>
          <div className="three">
            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1596129967/ghie-als/DepEd_Vision.jpg" />
          </div>
          <div className="four">
            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1596130050/ghie-als/DEPED_Core_Values.jpg" />
          </div>
          <div className="five">
            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1596130651/ghie-als/forEducation.jpg" />
          </div>
          <div className="six">
            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1596130910/ghie-als/deped_als_logo.jpg" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
