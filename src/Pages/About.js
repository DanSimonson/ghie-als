import React, { useEffect } from "react";
import styled from "styled-components";
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
            I have been teaching for over 18 years and was educated at De La
            Salle University. When you enter my Classroom whether virual or in
            person, you will experience a safe and motivating environment to
            help you reach your full potential.
          </p>
        </section>
        <figure>
          <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1596514527/ghie-als/ghieMainClassPhoto.jpg" />
        </figure>
        <section>
          <h1>Teaching Philosopy </h1>
          <p>Teaching ALS in the new normal setting requires new methods. </p>
          <p>
            It’s been a challenge for teachers and learners because of the new
            learning setting. Face to face teaching is not an option. New
            methods and techniques are needed.
          </p>
          <p>
            The new normal teaching will combine individual study with online
            classroom work where students learn at their own pace with guided
            modules
          </p>
          <p>
            Although the teaching tecniques change, the goal remains the same...
            to tap into students' passions and allow them to feel a connection
            to the curriculum, empowering them to learn.
          </p>
        </section>
      </article>
    </Wrapper>
  );
}

export default About;
