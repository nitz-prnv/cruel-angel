import React from "react";
import { Button, PlayerWrapper, SearchInput } from "../components";
import { Player } from "../components/player";

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
    <>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          console.log(playlist);
        }}
      />
      <Button onClick={getMusicDetails}>Search </Button>
      {query &&
        music.map((item) => {
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
              style={{ height: 300, cursor: "pointer" }}
            >
              {/* <img src={item.thumb} alt="music" width="200px"/> */}
              <h5>{item.title}</h5>
            </div>
          );
        })}
      {loading && <PlayerWrapper>ohohohoo</PlayerWrapper>}
      {playlist.length !== 0 &&   
      (
          <PlayerWrapper>
          <Player playlist={playlist}
          /> 
          </PlayerWrapper>
        
      )}
    </>
  );
}
