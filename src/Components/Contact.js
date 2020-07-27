import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import { db } from "../Firebase";
import { nanoid } from "nanoid";

function Contact() {
  const addOrEdit = (obj) => {
    const documentID = nanoid();
    db.collection("students").doc(documentID).set({
      firstName: obj.firstName,
      lastName: obj.lastName,
      email: obj.phone,
      phone: obj.phone,
      gender: obj.gender,
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
