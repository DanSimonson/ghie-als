import React, { useEffect } from "react";
import styled from "styled-components";
const Wrapper = styled.div``;

function Materials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <section>
        <p>The Learning Material Page</p>
      </section>
    </Wrapper>
  );
}

export default Materials;
