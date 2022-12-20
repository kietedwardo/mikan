import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import NewFooter from "../containers/newfooter";
import * as ROUTES from "../constants/routes";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = userName === "" || password === "" || emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();
    // const auth = getAuth(firebase)
    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: userName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setUserName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Đăng ký</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="User name"
              value={userName}
              onChange={({ target }) => setUserName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-up"
            >
              Đăng ký
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Đã có tài khoản? <Form.Link to="/signin">Đăng nhập ngay.</Form.Link>
          </Form.Text>
        </Form>
      </HeaderContainer>
      <NewFooter />
    </>
  );
}
