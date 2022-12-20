import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Header } from "../components";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/sign_in_header";
import NewFooter from "../containers/newfooter";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import { GoogleButton } from "react-google-button";
import { SocialIcon } from "react-social-icons";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = password === "" || emailAddress === "";
  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  const googleSignin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Logo src={logo} />
          <Form.Base onSubmit={handleSignin} method="POST">
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
              data-testid="sign-in"
            >
              Đăng nhập
            </Form.Submit>
          </Form.Base>
          <div
            onClick={googleSignin}
            style={{ margin: "0 auto", marginTop: "1rem" }}
          >
            <GoogleButton />
          </div>
          <div style={{ margin: "0 auto", marginTop: "1rem" }}>
            <Form.Text>
              Chưa có tài khoản?{" "}
              <Form.Link to="/signup">Đăng ký ngay.</Form.Link>
            </Form.Text>
            <Form.Text>
              Quên mật khẩu?{" "}
              <Form.Link to="/forgot">Lấy lại mật khẩu.</Form.Link>
            </Form.Text>
          </div>
        </Form>
      </HeaderContainer>
      <NewFooter />
    </>
  );
}
