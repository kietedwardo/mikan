import React, { useState, useEffect, useContext } from "react";
import { Card, Header, Player, Modal } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "./footer";
import Slider from "react-slick";
import MockData from "../fixtures/mock.json";
import ListData from "../fixtures/list.json";
import TrendData from "../fixtures/trending.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/moviemodal/styles/modal.css";
import MessengerCustomerChat from "react-messenger-customer-chat";

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
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
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Phim bộ
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Phim lẻ
            </Header.TextLink>
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
      <div style={{ marginTop: "30px" }}>
        <Slider {...settings}>
          {MockData.map((item) => (
            <Header src={item.image} key={item.id} direction={item.direction}>
              <Header.Feature>
                <Header.FeatureCallOut>{item.title}</Header.FeatureCallOut>
                <Header.SubTitle>{item.brief}</Header.SubTitle>
                <Header.PlayButton onClick={() => setOpenModal(true)}>
                  Play
                </Header.PlayButton>
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
              </Header.Feature>
            </Header>
          ))}
        </Slider>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Card.Title>Đang xem</Card.Title>
        <Slider {...myListSettings}>
          {ListData.map((item) => (
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
        <Card.Title>Đang hot</Card.Title>
        <Slider {...myListSettings}>
          {TrendData.map((item) => (
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
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Slider {...myListSettings}>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Slider>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video category={category} />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <MessengerCustomerChat pageId="100088271727355" appId="833396117726562" />
      <FooterContainer />
    </>
  );
}
