import React, { useContext } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/moviemodal/styles/modal.css";
import ReactPlayer from "react-player";
import SpyData from "../fixtures/spy.json";
import { Link, Link as ReachRouterLink } from "react-router-dom";
import {
  Avatar,
  Button,
  Container,
  Grid,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import NewFooter from "../containers/newfooter";

export default function Player() {
  const useStyles = makeStyles({
    playerWrapper: {
      width: "100%",
      position: "relative",
    },
  });

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
            <Header.Search />
            <Header.Profile>
              <Header.Picture to={ROUTES.PROFILE} src="/images/users/3.png" />
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
      </Header>
      <div class="playerWrapper">
        <Container maxWidth="md">
          <ReactPlayer
            controls={true}
            width={"100%"}
            height="100%"
            muted={false}
            playbackRate={1}
            playing={false}
            url="/videos/series/anime/spyxfamily23.mp4"
          />
        </Container>
      </div>
      <Container maxWidth="1980px">
        <div style={{ marginTop: "30px" }}>
          <Slider {...myListSettings}>
            {SpyData.map((item) => (
              <Header.Card
                src={item.image}
                key={item.id}
                direction={item.direction}
              />
            ))}
          </Slider>
        </div>
      </Container>
      <Container>
        <div style={{ marginTop: "30px" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="left"
          >
            <ListItem>
              <Typography
                variant="h4"
                color="white"
                marginLeft="50px"
                gutterBottom
              >
                Bình luận
              </Typography>
            </ListItem>
            <ListItem>
              <Grid
                container
                sx={{
                  p: 2,
                  borderRadius: "20px",
                  width: "1000px",
                  marginBottom: "10px",
                  backgroundColor: "#26272B",
                }}
                spacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={1}>
                  <Avatar
                    alt="R"
                    src="https://animeshelter.com/wp-content/uploads/2020/12/higurashi-no-naku-koro-ni-episode-7-3077.jpg"
                  />
                </Grid>
                <Grid item xs={11}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="white"
                    fontStyle="bold"
                  >
                    @ryukishi07
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant="body1"
                    color="white"
                    marginLeft="50px"
                    gutterBottom
                  >
                    Cx manh!
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>

            <ListItem>
              <Grid
                container
                sx={{
                  p: 2,
                  borderRadius: "20px",
                  width: "1000px",
                  marginBottom: "30px",
                  backgroundColor: "#26272B",
                }}
                spacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={1}>
                  <Avatar
                    alt="P"
                    src="https://ih1.redbubble.net/image.831483751.7162/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"
                  />
                </Grid>
                <Grid item xs={11}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="white"
                    fontStyle="bold"
                  >
                    @punpun
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant="body1"
                    color="white"
                    marginLeft="50px"
                    gutterBottom
                  >
                    Adu gái alime
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid
                container
                sx={{
                  p: 2,
                  marginBottom: "30px",
                  borderRadius: "20px",
                  backgroundColor: "#26272B",
                }}
                spacing={2}
              >
                <Grid item xs={2}>
                  <Avatar
                    alt="P"
                    src="https://ih1.redbubble.net/image.831483751.7162/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    color="warning"
                    fullWidth
                    variant="filled"
                    focused
                    label="Bình luận"
                    id="fullWidth"
                    sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ borderTop: "10px" }}
                  >
                    Gửi
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </Grid>
        </div>
      </Container>
      <NewFooter />
    </>
  );
}
