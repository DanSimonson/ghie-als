import React, { useState, useEffect, useContext } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import styled from "styled-components";
import "./Login.scss";
import ErrorModal from "../Components/ErrorModal";
import { AlsContext } from "../Context/AlsContext";
import { auth } from "../Firebase";
import { useHistory } from "react-router-dom";
//background-color: #e3dfdb;
const Wrapper = styled.div`
  background-color: #e3dfdb;
`;
//background-color: #388e3c;
const ContainerWrap = styled.div`
  height: 100%;
  width: 80%;
  background-color: #388e3c;
  margin: 0 auto;
`;
const Header = styled.h3`
  //border: 5px solid red;
  color: #ffeb3b;
  font-style: italic;
  font-weight: bold;
  text-align: center;
`;
export default function Login() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const navProps = useContext(AlsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeModal = (closeBool) => {
    navProps.setErrorOpen(closeBool);
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  function validateForm() {
    //return email.length > 0 && password.length > 0;
    return password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let email = "students@gmail.com";
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log(
          "sign in with submit successful with auth.currentUser.uid",
          auth.currentUser.uid
        );

        navProps.setUser(auth.currentUser.uid);
        history.push("/Materials");
        setPassword("");
      })
      .catch((err) => {
        console.log(err.message);
        setErrMessage(err.message);
        navProps.setErrorOpen(true);
        setPassword("");
      });
  }
  //console.log("sign in successful with auth.currentUser",auth);

  return (
    <>
      <Wrapper>
        <ContainerWrap>
          <div className="Login">
            <div className="flexWrapOne">
              <Header>Login With Ghie</Header>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flexWrapTwo">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="password"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="buttonWrap">
                <button
                  className="formButton"
                  disabled={!validateForm()}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </ContainerWrap>
      </Wrapper>
      <ErrorModal
        errorOpen={navProps.errorOpen}
        errMessage={errMessage}
        closeModal={closeModal}
      />
    </>
  );
}
