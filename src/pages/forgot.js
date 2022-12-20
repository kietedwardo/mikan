import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Header } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import NewFooter from "../containers/newfooter";
import { HeaderContainer } from "../containers/sign_in_header";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";
import { Button } from "@mui/material";

export default function Forgot() {
  const [emailAddress, setEmailAddress] = useState("");

  const isInvalid = emailAddress === "";

  const onChange = (e) => setEmailAddress(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, emailAddress);
      toast.success("Email đã được gửi. Hãy kiểm tra hộp thư");
    } catch (error) {
      toast.error("Không thể gửi email");
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Logo src={logo} />
          <Form.Base>
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={onChange}
            />
            <Button
              variant="contained"
              color="success"
              type="submit"
              onClick={onSubmit}
            >
              Đặt lại mật khẩu
            </Button>
            <ToastContainer />
          </Form.Base>
        </Form>
      </HeaderContainer>
      <NewFooter />
    </>
  );
}
