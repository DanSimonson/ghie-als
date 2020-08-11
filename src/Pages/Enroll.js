import React, { useEffect } from "react";
import styled from "styled-components";
//import { db, auth } from "../Firebase";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
const Wrapper = styled.div``;

function Enroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="mainEnroll">
      <Contact />
      <Footer />
    </main>
  );
}

export default Enroll;
