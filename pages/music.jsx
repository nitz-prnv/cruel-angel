import React from "react";
import ytdl from "ytdl-core";
import { Button, SearchInput } from "../components";

export default function Music(){
    const [query,setQuery]=React.useState('');
    const [musicUrl,setMusicUrl]=React.useState('');
    const [music,setMusic]=React.useState([]);
    async function getMusicDetails(){
        const res = await fetch(`/api/hello?search=${query}`);
        const data = await res.json()
        setMusic(data);
        console.log(data);
    }
    async function getMusicStream(url){
        const res = await fetch(`/api/url?url=${url}`);
        const data = await res.json()
        console.log(data)
    
    }
    return(
        <>
        <SearchInput type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}} />
            <Button onClick={getMusicDetails}>Search </Button>
                { music && 
               music.map((item)=>{
                   return(
                       <div key={item.title} onClick={()=>{getMusicStream(item.url)}}>
                           {/* <img src={item.thumb} alt="music" width="200px"/> */}
                           <h5>{item.title}</h5>
                        </div>
                   )
               })
               }
        </>
    )
}
