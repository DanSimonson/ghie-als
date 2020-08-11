import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import { db } from "../Firebase";
import { Spinner } from "react-bootstrap";

const Wrapper = styled.div``;

function SignedUp() {
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setFields(tempArray);
        setLoading(false);
      });
  }, []);
  //console.log("fields: ", fields);
  //<Spinner animation="border" variant="success" />
  return (
    <Wrapper>
      <section className="sectionSignedUp">
        {loading ? (
          <div
            style={{ height: "100%", textAlign: "center", marginTop: "2rem" }}
          >
            <Spinner animation="border" variant="success" />
          </div>
        ) : (
          <div>
            {fields.map((field) => (
              <>
                <div className="wrapList">
                  <ul className="signUpList" key={field.address}>
                    <li className="signUpHeader">Student SignUp Information</li>
                    <li>First Name: {field.firstName}</li>
                    <li>Last Name: {field.lastName}</li>
                    <li>First Address: {field.address}</li>
                    <li>Phone: {field.phone}</li>
                    <li>Email: {field.email}</li>
                    <li>Birth Date: {field.birthdate}</li>
                    <li>Gender: {field.gender}</li>
                    <li>Religion: {field.religion}</li>
                    <li>Father Name: {field.fathername}</li>
                    <li>Mother Name: {field.mothername}</li>
                    <li>Language: {field.language}</li>
                    <li>Interest: {field.interest}</li>
                    <li>Prefer: {field.prefer}</li>
                  </ul>
                  <hr />
                </div>
              </>
            ))}
          </div>
        )}
      </section>
      {loading !== true && <Footer />}
    </Wrapper>
  );
}

export default SignedUp;
