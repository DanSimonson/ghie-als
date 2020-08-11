import React, { useContext, useEffect } from "react";
import "./Home.scss";
import { AlsContext } from "../Context/AlsContext";
import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 100vh;
`;

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <p
                  style={{
                    borderTop: "1px solid red",
                    borderBottom: "1px solid red",
                  }}
                  className="d-none d-md-block d-lg-block h5 text-dark"
                >
                  Welcome to Ghie's Online Classroom
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dmglopmul/image/upload/v1595484089/ghie-als/ghieTeach.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <p
                  className="d-none d-md-block d-lg-block h5 text-dark"
                  style={{
                    borderTop: "1px solid red",
                    borderBottom: "1px solid red",
                  }}
                >
                  Teaching in new normal setting
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
                <p
                  style={{
                    borderTop: "1px solid red",
                    borderBottom: "1px solid red",
                  }}
                  className="d-none d-md-block d-lg-block h5 text-dark"
                >
                  Learning in a safe, motivating environment
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
        <div className="gridWrap">
          <div className="one">
            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1597025886/ghie-als/deped.jpg" />
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
            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1596164916/ghie-als/logoALSCrop.png" />
          </div>
        </div>
        <Footer />
      </Wrapper>
    </>
  );
}

export default Home;
