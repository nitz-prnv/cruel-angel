import React from "react";
import {
  ControlWrapper,
  Play,
  Pause,
  PlayerWrapper,
  Next,
  Prev,
  Shuffle,
  Repeat,
  MusicDetailsWrapper,
  ImageWrapper,
} from "../components";

export const Player = ({ playlist }) => {
  const [playing, SetPlaying] = React.useState(false);
  const [audio, setAudio] = React.useState(new Audio(playlist[0].stream_url));
  const [np, setNp] = React.useState(playlist[0]);
  React.useEffect(() => {
    PauseMusic();
    audio.load();
    PlayMusic();
  }, [audio]);
  const PlayMusic = () => {
    audio.play();
    SetPlaying(true);
    console.log("clicked");
  };
  const PauseMusic = () => {
    audio.pause();
    SetPlaying(false);
    console.log("paused");
  };

  const NextAudio = () => {
    console.log("next", np.title);
    console.log(playing);
    if (playlist.length - 1 > playlist.indexOf(np)) {
      if (playing) audio.pause();
      console.log(audio);
      let index = playlist.indexOf(np) + 1;
      console.log(index);
      setNp(playlist[index]);
      setAudio(new Audio(playlist[index].stream_url));
    }
  };
  const PrevAudio = () => {
    console.log("prev", np.title);

    if (playlist.indexOf(np) > 0) {
      if (playing) audio.pause();
      let index = playlist.indexOf(np) - 1;
      console.log(index);
      setNp(playlist[index]);
      setAudio(new Audio(playlist[index].stream_url));
      console.log(np, audio);
    }
  };
  return (
    <PlayerWrapper>
      <MusicDetailsWrapper>
        <ImageWrapper src={np.thumb} alt="song" width="100%" />
        {np.title}
      </MusicDetailsWrapper>
      <ControlWrapper>
        <Shuffle
          onClick={() => alert("sorry this feature is not available yet :)")}
        />
        <Prev onClick={PrevAudio} />
        {!playing ? (
          <Play onClick={PlayMusic} />
        ) : (
          <Pause onClick={PauseMusic} />
        )}
        <Next onClick={NextAudio} />
        <Repeat
          onClick={() => alert("sorry this feature is not available yet :)")}
        />
      </ControlWrapper>
      <div>
        {playlist.map((song) =>
          song.title === np.title ? (
            <h3 key={song.stream_url}>{song.title}</h3>
          ) : (
            <div key={song.stream_url}>{song.title}</div>
          )
        )}
      </div>
    </PlayerWrapper>
  );
};
export const EmptyPlayer = () => {
  return (
    <PlayerWrapper>
      <ControlWrapper>
        <Shuffle></Shuffle>
        <Prev></Prev>
        <Play></Play>
        <Next></Next>
        <Repeat></Repeat>
      </ControlWrapper>
    </PlayerWrapper>
  );
};
