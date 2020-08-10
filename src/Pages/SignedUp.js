import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../Firebase";

const Wrapper = styled.div``;

function SignedUp() {
  const [fields, setFields] = useState([]);

  let tempArrayTwo = [];
  useEffect(() => {
    window.scrollTo(0, 0);

    db.collection("students")
      .get()
      .then(function (querySnapshot) {
        const tempArray = [];
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          tempArray.push({
            address: doc.data().address,
            birthdate: doc.data().birthdate,
            email: doc.data().email,
            fathername: doc.data().fathername,
            firstName: doc.data().firstName,
            gender: doc.data().gender,
            interest: doc.data().interest,
            language: doc.data().language,
            lastName: doc.data().lastName,
            mothername: doc.data().mothername,
            phone: doc.data().phone,
            prefer: doc.data().prefer,
            religion: doc.data().religion,
          });
          console.log("tempArray: ", tempArray);
        });
        setFields({ tempArray });
      });
  }, []);
  console.log("fields: ", fields);
  return (
    <Wrapper>
      <section>
        <p>The SignedUp Page</p>
      </section>
    </Wrapper>
  );
}

export default SignedUp;
