import React from "react";
import { Feature, OptForm } from "../components";
import { BackgroundContainer } from "../containers/background";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";
import { Frame } from "../components/accordion/styles/accordion";

export default function Plan() {
  return (
    <>
      <BackgroundContainer>
        <Frame>
          <Feature>
            <Feature.SubTitle>Step 2 of 2</Feature.SubTitle>
            <Feature.Title>Choose your plan</Feature.Title>
            <Feature.Row>
              <Feature.Column>
                <OptForm>
                  <OptForm.Button to={ROUTES.SIGN_UP}>
                    <Feature.Title>Miễn phí</Feature.Title>
                  </OptForm.Button>
                </OptForm>
              </Feature.Column>
              <Feature.Column>
                <OptForm>
                  <OptForm.Button to={ROUTES.PAYMENT}>
                    <Feature.Title>120.000đ</Feature.Title>
                  </OptForm.Button>
                </OptForm>
              </Feature.Column>
              <Feature.Column>
                <OptForm>
                  <OptForm.Button to={ROUTES.PAYMENT}>
                    <Feature.Title>220.000đ</Feature.Title>
                  </OptForm.Button>
                </OptForm>
              </Feature.Column>
            </Feature.Row>
          </Feature>
        </Frame>
      </BackgroundContainer>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <FooterContainer />
      </div>
    </>
  );
}
