import React from "react";
import BrowseContainer from "../containers/browse";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";
import { Card, Header, Player } from "../components";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({ series, films });

  console.log(slides);

  return <BrowseContainer slides={slides} />;
}
