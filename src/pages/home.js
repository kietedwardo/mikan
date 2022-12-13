import React from "react";
import { Feature, OptForm, Form } from "../components";
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import * as ROUTES from "../constants/routes";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Trải nghiệm phim ảnh chất lượng cao không giới hạn.
          </Feature.Title>
          <Feature.SubTitle>Mọi lúc, mọi nơi, tiện dụng.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button to={ROUTES.REGISTRATION}>
              Đăng ký ngay
            </OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
