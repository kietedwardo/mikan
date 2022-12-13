import React from "react";
import { Feature, OptForm } from "../components";
import { BackgroundContainer } from "../containers/background";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";
import { Frame } from "../components/accordion/styles/accordion";

export default function Registration() {
  return (
    <>
      <BackgroundContainer>
        <Frame>
          <Feature>
            <Feature.SubTitle>Bước 1</Feature.SubTitle>
            <Feature.Title>Hoàn tất tài khoản của bạn</Feature.Title>
            <OptForm>
              <OptForm.Button to={ROUTES.PLAN}>Next</OptForm.Button>
            </OptForm>
          </Feature>
          <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
            <FooterContainer />
          </div>
        </Frame>
      </BackgroundContainer>
    </>
  );
}
