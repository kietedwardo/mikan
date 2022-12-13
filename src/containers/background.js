import React from "react";
import { Background } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function BackgroundContainer({ children }) {
  return (
    <Background>
      <Background.Frame>
        <Background.Logo to={ROUTES.HOME} alt="mikan" src={logo} />
      </Background.Frame>
      {children}
    </Background>
  );
}
