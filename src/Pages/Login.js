import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import styled from "styled-components";
import "./Login.scss";
const Wrapper = styled.div``;
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <FormLabel>Password</FormLabel>
                <FormControl
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
