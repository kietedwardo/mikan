import React, { useContext } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { FirebaseContext } from "../context/firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/moviemodal/styles/modal.css";
import { Link, Link as ReachRouterLink } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

export default function Profile() {
  const { firebase } = useContext(FirebaseContext);

  return (
    <>
      <Header src="black-bar">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Mikan" />
            <Header.TextLink>Phim bộ</Header.TextLink>
            <Header.TextLink>Phim lẻ</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search />
            <Header.Profile>
              <Header.Picture to={ROUTES.PROFILE} src="/images/users/3.png" />
            </Header.Profile>
            <Header.Picture to={ROUTES.GENRE} src="/images/icons/nav.png" />
          </Header.Group>
        </Header.Frame>
      </Header>
      <Header src="black-bar">
        <Header.Frame>
          <Link
            to={ROUTES.ANIME}
            style={{
              color: "white",
              fontSize: "1.5rem",
              textDecoration: "none",
              marginLeft: "0.5rem",
            }}
          >
            Anime
          </Link>
          <Header.TextLink>Hành động</Header.TextLink>
          <Header.TextLink>Chính kịch</Header.TextLink>
          <Header.TextLink>Kinh dị</Header.TextLink>
          <Header.TextLink>Phim Hàn</Header.TextLink>
          <Header.TextLink>Cổ trang</Header.TextLink>
          <Header.TextLink>Tâm lý</Header.TextLink>
          <Header.TextLink>Phim Việt</Header.TextLink>
          <Header.TextLink>Phim Trung</Header.TextLink>
        </Header.Frame>
        <Header.Frame>
          <Header.TextLink>Phim Nhật</Header.TextLink>
          <Header.TextLink>Phim Âu Mỹ</Header.TextLink>
          <Header.TextLink>Trẻ em</Header.TextLink>
          <Header.TextLink>Trinh thám</Header.TextLink>
          <Header.TextLink>Hàn lâm</Header.TextLink>
        </Header.Frame>
      </Header>
    </>
  );
}
