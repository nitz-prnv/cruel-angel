import React from "react";

export default function Music(){
    const [query,setQuery]=React.useState('');
    const [music,setMusic]=React.useState();
    async function getMusicDetails(){
        const res = await fetch(`/api/hello?search=${query}`);
        const data = await res.json()
        setMusic(data);
        console.log(data);
    }
    return(
        <>
        <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}} />
            <button onClick={getMusicDetails}>the test </button>
                { music && 
                <>
                <img src={music.thumb} alt="" />         
                <audio src={music.url} controls></audio>
                </> }
        </>
    )
}