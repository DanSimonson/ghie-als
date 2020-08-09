import React, { useEffect } from "react";
import styled from "styled-components";
//import { db, auth } from "../Firebase";
import Contact from "../Components/Contact";
const Wrapper = styled.div``;

function Enroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="mainEnroll">
      <Contact />;
    </main>
  );
}

export default Enroll;
