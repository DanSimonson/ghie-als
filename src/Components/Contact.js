import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import { db } from "../Firebase";
import { nanoid } from "nanoid";

function Contact() {
  const addOrEdit = (obj) => {
    console.log("obj: ", obj);
    const documentID = nanoid();
    db.collection("students").doc(documentID).set({
      firstName: obj.firstName,
      lastName: obj.lastName,
      email: obj.email,
      phone: obj.phone,
      gender: obj.gender,
      birthdate: obj.birthdate,
      language: obj.language,
      religion: obj.religion,
      address: obj.address,
      fathername: obj.fathername,
      mothername: obj.mothername,
      interest: obj.interest,
      prefer: obj.prefer,
    });
  };
  return (
    <>
      <div className="jumbo">ALS Enrollment Form</div>
      <ContactForm addOrEdit={addOrEdit} />
    </>
  );
}

export default Contact;
