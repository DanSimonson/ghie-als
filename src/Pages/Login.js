import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import styled from "styled-components";
import "./Login.scss";
const Wrapper = styled.div`
  background-color: #e3dfdb;
`;
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const initialFieldValues = {
    email: "",
    password: "",
  };
  let [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    /*setValues({
      ...values,
      [name]: value,
    });*/
  };

  function validateForm() {
    //return email.length > 0 && password.length > 0;
    return values.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const ContainerWrap = styled.div`
    height: 40%;
    width: 90%;
    background-color: #388e3c;
    margin: 0 auto;
  `;
  const Header = styled.h3`
    //border: 5px solid red;
    color: #333;
    text-align: center;
  `;

  return (
    <>
      <Wrapper>
        <ContainerWrap>
          <div className="Login">
            <Header>Login</Header>
            <form onSubmit={handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
                <FormLabel>Email</FormLabel>
                <FormControl
                  autoFocus
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <FormLabel>Password</FormLabel>
                <FormControl
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <Button
                block
                bsSize="large"
                disabled={!validateForm()}
                type="submit"
              >
                Login
              </Button>
            </form>
          </div>
        </ContainerWrap>
      </Wrapper>
    </>
  );
}
