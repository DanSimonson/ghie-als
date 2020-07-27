import React, { useState } from "react";

function ContactForm(props) {
  const [gender, setGender] = useState("");

  const initialFieldValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    props.addOrEdit(values);
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <ul className="flex-outer">
          <li>
            <label for="first-name">First Name</label>
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
            <label for="last-name">Last Name</label>
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
            <label for="email">Email</label>
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
            <label for="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone here"
              name="phone"
              value={values.phone}
              onChange={handleInputChange}
            />
          </li>
          {/*<li>
            <label for="message">Message</label>
            <textarea
              rows="6"
              id="message"
              placeholder="Enter your message here"
            ></textarea>
          </li>*/}
          <p>Sex</p>
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
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ContactForm;
