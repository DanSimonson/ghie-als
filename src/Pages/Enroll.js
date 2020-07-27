import React, { useEffect } from "react";
import styled from "styled-components";
//import { db, auth } from "../Firebase";
import Contact from "../Components/Contact";
const Wrapper = styled.div``;

function Enroll() {
  useEffect(() => {
    //db.collection
    /*db.collection("students")
      .get()
      .then((snapshot) => {
        //console.log("snapshot: ", snapshot);
        const students = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          //console.log("data: ", data);
          students.push(data);
        });
      })
      .catch((error) => {
        console.log(error);
      });*/
  }, []);

  return <Contact />;
}

export default Enroll;
