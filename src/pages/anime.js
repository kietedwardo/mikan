import React, { useState, useEffect, useContext } from "react";
import { Card, Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import Slider from "react-slick";
import AnimeData from "../fixtures/anime.json";
import RomcomData from "../fixtures/romcom.json";
import FantasyData from "../fixtures/fantasy.json";
import SFData from "../fixtures/sf.json";
import SolData from "../fixtures/sol.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/moviemodal/styles/modal.css";

export default function Anime({ slides }) {
  const [searchTerm, setSearchTerm] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const myListSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header src="black-bar">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Mikan" />
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture to={ROUTES.PROFILE} src="/images/users/3.png" />
            </Header.Profile>
            <Header.Picture to={ROUTES.GENRE} src="/images/icons/nav.png" />
          </Header.Group>
        </Header.Frame>
      </Header>
      <center>
        <h1 style={{ color: "white" }}>Anime</h1>
      </center>
      <div style={{ marginTop: "30px" }}>
        {" "}
        <Card.Title>Đang Hot</Card.Title>
        <Slider {...myListSettings}>
          {AnimeData.map((item) => (
            <Header.Meta>
              <Header.Card
                src={item.image}
                key={item.id}
                direction={item.direction}
              />
            </Header.Meta>
          ))}
        </Slider>
      </div>
      <div style={{ marginTop: "30px" }}>
        {" "}
        <Card.Title>Romcom</Card.Title>
        <Slider {...myListSettings}>
          {RomcomData.map((item) => (
            <Header.Meta>
              <Header.Card
                src={item.image}
                key={item.id}
                direction={item.direction}
              />
            </Header.Meta>
          ))}
        </Slider>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Card.Title>Huyễn tưởng</Card.Title>
        <Slider {...myListSettings}>
          {FantasyData.map((item) => (
            <Header.Meta>
              <Header.Card
                src={item.image}
                key={item.id}
                direction={item.direction}
              />
            </Header.Meta>
          ))}
        </Slider>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Card.Title>Viễn tưởng</Card.Title>
        <Slider {...myListSettings}>
          {SFData.map((item) => (
            <Header.Meta>
              <Header.Card
                src={item.image}
                key={item.id}
                direction={item.direction}
              />
            </Header.Meta>
          ))}
        </Slider>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Card.Title>Đời thường</Card.Title>
        <Slider {...myListSettings}>
          {SolData.map((item) => (
            <Header.Meta>
              <Header.Card
                src={item.image}
                key={item.id}
                direction={item.direction}
              />
            </Header.Meta>
          ))}
        </Slider>
      </div>
      <FooterContainer />
    </>
  );
}
