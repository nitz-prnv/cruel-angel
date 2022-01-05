import React from "react";
import {
  Button,
  MusicWrapper,
  PlayerWrapper,
  SearchInput,
  SearchResults,
} from "../components";
import { EmptyPlayer, Player } from "../components/player";

export default function Music() {
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [music, setMusic] = React.useState([]);
  const [playlist, setPlaylist] = React.useState([]);
  async function getMusicDetails() {
    setLoading(true);
    const res = await fetch(`/api/music?search=${query}`);
    const data = await res.json();
    setMusic(data);
    console.log(data);
    setLoading(false);
  }

  return (
    <MusicWrapper>
      <div>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Button onClick={getMusicDetails}>Search </Button>
      </div>{" "}
      <SearchResults>
      {query &&
        music.map((item,index) => {
          if(index<10)
          return (
            <div
              key={item.url}
              onClick={async () => {
                setLoading(true);
                const res = await fetch(`/api/url?url=${item.url}`);
                const data = await res.json();
                setPlaylist([
                  ...playlist,
                  {
                    thumb: item.thumb,
                    title: item.title,
                    stream_url: data.url,
                  },
                ]);
                console.log(playlist);
                setLoading(false);
              }}
              style={{ cursor: "pointer" }}
            >
              <img src={item.thumb} alt="music" width="100px"/>
              <h5>{item.title}</h5>
            </div>
          );
        })}</SearchResults>
      {playlist.length !== 0 ? <Player playlist={playlist} /> : <EmptyPlayer />}
    </MusicWrapper>
  );
}
