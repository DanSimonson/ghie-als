import React, { useEffect } from "react";
import styled from "styled-components";
const Wrapper = styled.div``;

function SignedUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <section>
        <p>The SignedUp Page</p>
      </section>
    </Wrapper>
  );
}

export default SignedUp;
