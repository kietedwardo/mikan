import React, { useContext, useState, useEffect } from "react";
import { Form, Header, Profiles } from "../components";
import { HeaderContainer } from "../containers/sign_in_header";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Profile() {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser;

  return (
    <>
      <HeaderContainer>
        <Form>
          <Profiles.Image src="/images/users/3.png" />
          <Header.Frame>
            <Header.SubTitle>Email:</Header.SubTitle>
            <Header.SubTitle>{user.email}</Header.SubTitle>
          </Header.Frame>
          <Header.Frame>
            <Header.SubTitle>Premium</Header.SubTitle>
            <Button component={Link} variant="contained" to={ROUTES.PLAN}>
              Đổi gói
            </Button>
          </Header.Frame>
          <Header.Frame>
            <Header.SubTitle>Vietsub</Header.SubTitle>
            <Button variant="contained">Cài đặt phụ đề</Button>
          </Header.Frame>
          <Header.Frame>
            <Header.SubTitle>Tiếng Việt</Header.SubTitle>
            <Button variant="contained">Đổi ngôn ngữ</Button>
          </Header.Frame>
          <div
            style={{
              marginTop: "2rem",
              margin: "0 auto",
              paddingInline: "2rem",
            }}
          >
            <Button variant="contained">Huỷ gói đăng ký</Button>
            <div
              style={{
                marginTop: "2rem",
                margin: "0 auto",
                paddingInline: "2rem",
              }}
            >
              <Button
                variant="text"
                color="error"
                onClick={() => firebase.auth().signOut()}
              >
                Đăng xuất
              </Button>
            </div>
          </div>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
