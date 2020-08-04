import React from "react";
import styled from "styled-components";
const Wrapper = styled.div``;

function About() {
  return (
    <Wrapper>
      <article>
        <section>
          <h1>THE DEPED MISSION</h1>
          <p>
            To protect and promote the right of every Filipino to quality,
            equitable, culture-based, and complete basic education where:
          </p>
          <ul className="list">
            <li>
              Students learn in a child-friendly, gender-sensitive, safe, and
              motivating environment.
            </li>
            <li>
              Teachers facilitate learning and constantly nurture every learner.
            </li>
            <li>
              Administrators and staff, as stewards of the institution, ensure
              an enabling and supportive environment for effective learning to
              happen.
            </li>
            <li>
              Family, community, and other stakeholders are actively engaged and
              share responsibility for developing life-long learners.
            </li>
          </ul>
          {/*<p>
            Pariatur consequatur blanditiis voluptatem. Error in esse temporibus
            quia. Perferendis molestiae velit deleniti deserunt. Provident qui
            ullam adipisci optio. Molestias similique et deserunt sint molestias
            autem non autem. Nemo itaque repellat assumenda nostrum qui eos
            porro dolorum.
          </p>*/}
        </section>
        <figure>
          <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1596514527/ghie-als/ghieMainClassPhoto.jpg" />
        </figure>
        <section>
          <h1>THE DEPED VISION</h1>
          <ul className="list">
            <li>We dream of Filipinos.</li>
            <li>who passionately love their country</li>
            <li>and whose values and competencies</li>
            <li>enable them to realize their full potential</li>
            <li>and contribute meaningfully to building the nation.</li>
          </ul>
          <ul className="list">
            <li>As a learner-centered public institution,</li>
            <li>the Department of Education</li>
            <li>continuously improves itself</li>
            <li>to better serve its stakeholders.</li>
          </ul>
        </section>
      </article>
    </Wrapper>
  );
}

export default About;
