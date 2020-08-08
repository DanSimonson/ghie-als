import React, { useState } from "react";
import InputMask from "react-input-mask";

function ContactForm(props) {
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [religion, setReligion] = useState("");
  const [interest, setInterest] = useState("");
  const [program, setProgram] = useState("");
  const [prefer, setPrefer] = useState("");

  const initialFieldValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    birthdate: "",
    age: "",
    language: "",
    religion: "",
    address: "",
    fathername: "",
    mothername: "",
    contactnumber: "",
    interest: "",
    program: "",
    prefer: "",
  };
  let [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleGenderChange(e) {
    setGender(e.target.value);
    let { value } = e.target;

    setValues({
      ...values,
      gender: value,
    });
  }

  function handleLanguageChange(e) {
    setLanguage(e.target.value);
    let { value } = e.target;

    setValues({
      ...values,
      language: value,
    });
  }
  function handleReligionChange(e) {
    setReligion(e.target.value);
    let { value } = e.target;

    setValues({
      ...values,
      religion: value,
    });
  }

  function handleInterestChange(e) {
    setInterest(e.target.value);
    let { value } = e.target;

    setValues({
      ...values,
      interest: value,
    });
  }

  function handleProgramChange(e) {
    setProgram(e.target.value);
    let { value } = e.target;

    setValues({
      ...values,
      interest: value,
    });
  }

  function handlePreferredChange(e) {
    setPrefer(e.target.value);
    let { value } = e.target;

    setValues({
      ...values,
      prefer: value,
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("values: ", values);
    props.addOrEdit(values);
  };

  return (
    <div className="container">
      <div className="jumbo">ALS Enrollment Form</div>
      <form onSubmit={handleFormSubmit}>
        <ul className="flex-outer">
          <li>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your first name here"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
          </li>
          <li>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your last name here"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email here"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <InputMask
              name="phone"
              mask="9999-9999999"
              maskChar={null}
              value={values.phone}
              onChange={handleInputChange}
            />
          </li>
          <p style={{ marginTop: "18px" }}>Sex</p>
          <li>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
              Female
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
              Male
            </label>
          </li>
          <li style={{ marginTop: "18px" }}>
            <label htmlFor="birthdate">Birth Date</label>
            <InputMask
              name="birthdate"
              mask="99/99/99"
              maskChar={null}
              value={values.birthdate}
              onChange={handleInputChange}
            />
          </li>
          <li>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              placeholder="Enter your age"
              name="age"
              value={values.age}
              onChange={handleInputChange}
            />
          </li>
          <p style={{ marginTop: "18px" }}>Mother Tongue (Sinusong Wika)</p>
          <li>
            <label>
              <input
                type="radio"
                value="tagalog"
                checked={language === "tagalog"}
                onChange={handleLanguageChange}
              />
              Tagalog
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="kapampangan"
                checked={language === "kapampangan"}
                onChange={handleLanguageChange}
              />
              Kapampangan
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="pangasinense"
                checked={language === "pangasinense"}
                onChange={handleLanguageChange}
              />
              Pangasinense
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="iloko"
                checked={language === "iloko"}
                onChange={handleLanguageChange}
              />
              Iloko
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="bikol"
                checked={language === "bikol"}
                onChange={handleLanguageChange}
              />
              Bikol
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="cebuano"
                checked={language === "cebuano"}
                onChange={handleLanguageChange}
              />
              Cebuano
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="hiligaynon"
                checked={language === "hiligaynon"}
                onChange={handleLanguageChange}
              />
              Hiligaynon
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="waray"
                checked={language === "waray"}
                onChange={handleLanguageChange}
              />
              Waray
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="tausug"
                checked={language === "tausug"}
                onChange={handleLanguageChange}
              />
              Tausug
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="maguindanaoan"
                checked={language === "maguindanaoan"}
                onChange={handleLanguageChange}
              />
              Maguindanaoan
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="maranao"
                checked={language === "maranao"}
                onChange={handleLanguageChange}
              />
              Maranao
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="chabacano"
                checked={language === "chabacano"}
                onChange={handleLanguageChange}
              />
              Chabacano
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="other"
                checked={language === "other"}
                onChange={handleLanguageChange}
              />
              Other
            </label>
          </li>
          <p style={{ marginTop: "18px" }}>Religion (Relihiyon)</p>
          <li>
            <label>
              <input
                type="radio"
                value="roman catholic"
                checked={religion === "roman catholic"}
                onChange={handleReligionChange}
              />
              Roman Catholic
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="protestant"
                checked={religion === "protestant"}
                onChange={handleReligionChange}
              />
              Protestant
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="iglesia ni kristo"
                checked={religion === "iglesia ni kristo"}
                onChange={handleReligionChange}
              />
              Iglesia Ni Kristo
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="other"
                checked={religion === "other"}
                onChange={handleReligionChange}
              />
              Other
            </label>
          </li>
          <li style={{ marginTop: "18px" }}>
            <label htmlFor="first-name">Address (Tirahan)</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </li>
          <li>
            <label htmlFor="father-name">Father's Name</label>
            <input
              type="text"
              id="father-name"
              placeholder="Enter your fathther's name"
              name="fathername"
              value={values.fathername}
              onChange={handleInputChange}
            />
          </li>
          <li>
            <label htmlFor="mother-name">Mother Name</label>
            <input
              type="text"
              id="mother-name"
              placeholder="Enter your mother's name"
              name="mothername"
              value={values.mothername}
              onChange={handleInputChange}
            />
          </li>
          <li>
            <label htmlFor="contact-number">Contact Number (Telepono)</label>
            <InputMask
              name="contactnumber"
              mask="9999-9999999"
              maskChar={null}
              value={values.contactnumber}
              onChange={handleInputChange}
            />
          </li>
          <p style={{ marginTop: "18px" }}>
            Interested in ALS Program (Interesado ka ba sa programa ng ALS?)
          </p>
          <li>
            <label>
              <input
                type="radio"
                value="yes"
                checked={interest === "yes"}
                onChange={handleInterestChange}
              />
              Yes
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="no"
                checked={interest === "no"}
                onChange={handleInterestChange}
              />
              No
            </label>
          </li>
          <p style={{ marginTop: "18px" }}>
            If yes, preferred program (Kung OO, anong programa ang nais mo)
          </p>
          <li>
            <label>
              <input
                type="radio"
                value="blb"
                checked={prefer === "blb"}
                onChange={handlePreferredChange}
              />
              BLP (Basic Literacy Program- para sa mga hindi marunong bumasa o
              sumulat)
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="elementary"
                checked={prefer === "elementary"}
                onChange={handlePreferredChange}
              />
              Elementary (Elementarya- para sa mga hindi nakatapos ng
              elementarya)
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="jhs"
                checked={prefer === "jhs"}
                onChange={handlePreferredChange}
              />
              JHS (Junior High School- para sa mga hindi nakatapos ng Junior
              High School o Sekondarya)
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="livelihood"
                checked={prefer === "livelihood"}
                onChange={handlePreferredChange}
              />
              Livelihood (Livelihood Program- mga kasanayan na maaaring
              pagkakitaan tulad ng soap making, meat processing at iba pa)
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="tesda"
                checked={prefer === "tesda"}
                onChange={handlePreferredChange}
              />
              Tesda Courses (TESDA Courses- Teknikal na kasanayan na may
              katumbas na NC-I, II, III sa tulong ng pamahalaang bayan)
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="other"
                checked={prefer === "other"}
                onChange={handlePreferredChange}
              />
              Other
            </label>
          </li>
          <li style={{ marginTop: "18px" }}>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ContactForm;
