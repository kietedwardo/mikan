import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import { Container, Logo } from "./styles/background";

export default function Background({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Background.Frame = function BackgroundFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Background.Logo = function BackgroundLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};
