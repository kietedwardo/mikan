import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Button,
  Overlay,
  Inner,
  Close,
  Trailer,
  Video,
} from "./styles/player";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [itemPlayer, setItemPlayer] = useState({});

  return (
    <PlayerContext.Provider
      value={{ showPlayer, setShowPlayer, itemPlayer, setItemPlayer }}
    >
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, category, ...restProps }) {
  const { showPlayer, itemPlayer, setShowPlayer } = useContext(PlayerContext);

  console.log(itemPlayer);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
          <Inner>
            <video id="mikan-player" controls>
              <source
                src={`/videos/${category}/${itemPlayer.genre}/${itemPlayer.slug}/trailer.mp4`}
                type="video/mp4"
              />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
      {...restProps}
    >
      Play
    </Button>
  );
};
