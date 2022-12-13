import React from "react";
import {
  Container,
  Title,
  SubTitle,
  Row,
  Column,
  Button,
} from "./styles/feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.Row = function FeatureRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Feature.Column = function FeatureColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
