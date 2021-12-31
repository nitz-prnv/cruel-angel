import React from "react";
export const Player = ({ playlist }) => {
  const [playing, SetPlaying] = React.useState(false);
  const [audio, setAudio] = React.useState(new Audio(playlist[0].stream_url));
  const [np,setNp] = React.useState(playlist[0]);
//   React.useEffect(()=>{
//     setAudio(new Audio(playlist[0].stream_url))
//     setNp(playlist[0])
//     console.log(playlist);
//   },[playlist])
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
     
    if(playlist.length-1>playlist.indexOf(np)){
        audio.pause()
        let index = playlist.indexOf(np)+1;
        console.log(index);
        setNp(playlist[index])
        setAudio(new Audio(playlist[index].stream_url));
        console.log(np,audio);
        audio.play()
    }

  };
  const PrevAudio =()=>{
    if(playlist.indexOf(np)>0){
        audio.pause()
        let index = playlist.indexOf(np)-1
        console.log(index);
        setNp(playlist[index])
        setAudio(new Audio(playlist[index].stream_url));
        console.log(np,audio);
        audio.play()  
    }
  }
  return (
    <>
      <button onClick={PrevAudio}>prev</button>
      <button onClick={playing ? PauseMusic : PlayMusic}>
        {playing ? "PAUSE" : "PLAY"}
      </button>
      <button onClick={NextAudio}>next</button>
    </>
  );
};
