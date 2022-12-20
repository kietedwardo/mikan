import React from "react";
import { Feature, OptForm } from "../components";
import { BackgroundContainer } from "../containers/background";
import NewFooter from "../containers/newfooter";
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
            <NewFooter />
          </div>
        </Frame>
      </BackgroundContainer>
    </>
  );
}
