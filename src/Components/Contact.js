import React, { useState } from "react";
import { db } from "../Firebase";
import { nanoid } from "nanoid";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import { AlsContext } from "../Context/AlsContext";
import ConfirmModal from "./ConfirmModal";

function Contact() {
  const [errorOpen, setErrorOpen] = useState(false);

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
      <div style={{ margin: " 16px 5px" }}>
        <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1596168301/ghie-als/ALS-ENROLLMENT-PROCEDURE-gina.jpg" />
      </div>
      <div className="instructions">
        <p>
          Para Sa mga nais pumasok Sa ALS Silang SY 2020-2021 maaari pa kayong
          mag enrol o magparegister . Just fill out the form na nasa ibaba o
          tumawag sa number na nasa poster.
        </p>
      </div>
      <ContactForm addOrEdit={addOrEdit} />
      <ConfirmModal errorOpen={errorOpen} closeModal={closeModal} />
    </>
  );
}

export default Contact;
