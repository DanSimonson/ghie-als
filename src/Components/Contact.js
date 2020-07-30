import React, { useState } from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import { db } from "../Firebase";
import { nanoid } from "nanoid";
import { AlsContext } from "../Context/AlsContext";
import ConfirmModal from "./ConfirmModal";

function Contact() {
  const [errorOpen, setErrorOpen] = useState(false);
  //console.log("errorOpen: ", errorOpen);
  const closeModal = (closeBool) => {
    setErrorOpen(closeBool);
  };

  const addOrEdit = (obj) => {
    console.log("obj: ", obj);
    const documentID = nanoid();
    db.collection("students")
      .doc(documentID)
      .set({
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
      })
      .then(() => {
        setErrorOpen(true);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  return (
    <>
      {/*<div className="jumbo">ALS Enrollment Form</div>*/}
      <ContactForm addOrEdit={addOrEdit} />
      <ConfirmModal errorOpen={errorOpen} closeModal={closeModal} />
    </>
  );
}

export default Contact;
