import React from "react";
import { Button } from "../components";

export default function Music(){
    const [query,setQuery]=React.useState('');
    const [music,setMusic]=React.useState([]);
    async function getMusicDetails(){
        const res = await fetch(`/api/hello?search=${query}`);
        const data = await res.json()
        setMusic(data);
        console.log(data);
    }
    return(
        <>
        <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}} />
            <Button onClick={getMusicDetails}>the test </Button>
                { music && 
               music.map((item)=>{
                   return(
                       <div>
                           <img src={item.thumb} alt="music" width="200px"/>
                           <h3>{item.title}</h3>
                        </div>
                   )
               })
               }
        </>
    )
}