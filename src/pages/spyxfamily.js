import React, { useContext } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/moviemodal/styles/modal.css";
import { Link, Link as ReachRouterLink } from "react-router-dom";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  ListItem,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import RomcomData from "../fixtures/romcom.json";
import NewFooter from "../containers/newfooter";

export default function Spyxfamily() {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "0",
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
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: "1400px",
          marginTop: "20px",
          flexGrow: 1,
          backgroundColor: "#181818",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://static2.vieon.vn/vieplay-image/poster_v4/2022/09/23/p2yfnbpt_660x946-spyxfamily-2-demo.png"
            />
          </Grid>
          <Grid item xs sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  color={"white"}
                >
                  Spy x Family
                </Typography>
                <Divider color={"white"} />
                <Typography color={"white"} variant="h6" gutterBottom>
                  Mùa thu 2022 • PG-13
                </Typography>
                <Typography color={"white"} variant="h6" gutterBottom>
                  ⭐⭐⭐⭐⭐
                </Typography>
                <Typography gutterBottom variant="subtitle1" color={"white"}>
                  Vì những lý do riêng, một điệp viên, một sát thủ và một nhà
                  ngoại cảm bắt tay đóng giả làm một gia đình trong khi che giấu
                  danh tính thật của họ ...
                </Typography>
                <Typography gutterBottom variant="subtitle2" color={"white"}>
                  Diễn viên: Takuya Eguchi, Atsumi Tanezaki, Saori Hayami
                </Typography>
                <Button
                  color="error"
                  component={Link}
                  variant="contained"
                  to={ROUTES.PLAYER}
                >
                  Xem ngay
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <ReactPlayer
              controls={true}
              width={"100%"}
              height="100%"
              muted={false}
              playbackRate={1}
              playing={true}
              url="/videos/series/anime/spyxfamily-trailer.mp4"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={"20px"}>
          <Grid item xs container>
            <Typography gutterBottom variant="h4" color={"white"}>
              Các tập | Spy x Family
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/9l-jyxzv1OE/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 1
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/57bCLjvZ5QA/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 2
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/2O3ZI5JMT-g/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 3
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/kXVrBewtZy0/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 4
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/iAJD1fZA_CM/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 5
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={"10px"}>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/3s6mR2UMRVY/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 6
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/cV_gDA-gLkQ/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 7
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/4k0P_9jhN78/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 8
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/KwQscZwRkk0/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 9
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/nBcM1iHQq_o/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 10
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={"10px"}>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/zekaFgvXaLI/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 11
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/htVSY_lFAh4/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 12
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/1_9GG_EDhZo/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 13
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/PZgEHpfThac/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 14
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/0XKZqgTH4Ws/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 15
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={"10px"}>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/JLKPPsYBZ40/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 16
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/CDdhYKIiGG0/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 17
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/K1sNfYCelhw/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 18
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/ff2lOF53tt4/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 19
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/Qt0ZrQWtQGg/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 20
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={"10px"}>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/AOlJelLO00Q/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 21
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/SAmkxUS70SU/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 22
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://i.ytimg.com/vi/ZkD4ite2wL4/maxresdefault.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 23
            </Typography>
          </Grid>
          <Grid item xs>
            <Img
              alt="spyxfamily"
              src="https://wallpaperaccess.com/full/2588754.jpg"
            />
            <Typography gutterBottom variant="subtitle1" color={"white"}>
              Tập 24
            </Typography>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        <Grid container spacing={2} marginTop={"20px"}>
          <Grid item xs>
            <Typography gutterBottom variant="h4" color={"white"}>
              Bạn sẽ thích
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={"20px"}>
          <Grid item xs>
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
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={"20px"}>
          <Grid item xs>
            <Typography gutterBottom variant="h4" color={"white"}>
              Bình luận
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            p: 2,
            borderRadius: "20px",
            width: "1000px",
            marginTop: "30px",
            marginBottom: "30px",
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
      </Paper>
      <NewFooter />
    </>
  );
}
