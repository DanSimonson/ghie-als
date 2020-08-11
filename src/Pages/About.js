import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
const Wrapper = styled.div``;

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <article className="articleBackground">
        <section>
          <h1>Teaching Experience</h1>
          <p>
            Hi there, I'm Gina Simonson and I teach basic education to ALS
            students.
          </p>
          <p>
            I have been teaching ALS for over 16 years and was educated at De La
            Salle University. When you enter my classroom, whether virtual or in
            person, you will experience a safe and motivating environment to
            help you reach your full potential.
          </p>
        </section>
        <figure>
          <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1596514527/ghie-als/ghieMainClassPhoto.jpg" />
        </figure>
        <section>
          <h1>Teaching ALS in the new normal setting requires new methods </h1>
          <p>
            It’s been a challenge for teachers and learners because of the new
            learning setting. Face to face teaching is not an option. New
            methods and techniques are needed.
          </p>
          <p>
            The new normal teaching will combine individual study with online
            classroom work where learners learn at their own pace with guided
            modules
          </p>
          <p>
            Although the teaching tecniques change, the goal remains the same...
            to tap into students' passions and allow them to feel a connection
            to the curriculum, empowering them to learn.
          </p>
          <p>
            This interactive website is one of the new modalities in the new
            normal setting to equip learners for success.
          </p>
        </section>
      </article>
      <Footer />
    </Wrapper>
  );
}

export default About;
