import styled from "styled-components";

import { device } from "./device";
const bg = ''
export const MainWrapper = styled.div `
display:grid;
width:100%;
align-items:center;
justify-items:center;
background: url("https://wallpaperaccess.com/full/1193275.jpg"); 

height:100vh;
@media only screen and (max-width: 768px)  {
    color:blue;
    justify-items:center;
    align-items:center;
    background : url("https://i.pinimg.com/originals/02/f1/d1/02f1d1c6b95c2c1e198f381794d84aac.jpg");   
    
}
background-repeat: no-repeat;
background-position: center;


`
export const LoginWrapper = styled.div `
color: beige;
display: grid;
grid-template-columns: 40% 60%;
height: 50%;
width:50%;
border-radius:10px;
justify-items:center;
align-items:center;
background-color: rgba(102, 104, 122, 0.757);
@media only screen and (max-width: 768px)  {
width:90%;
}

`

export const Input = styled.input `
border: 2px black solid;
height:35px;
width:70%;
border-radius:20px;
`
export const Button = styled.button `
background-color: rgb(55, 104, 148);
color: white;
height:100%;
width: 30%;
border-radius:10px;
border:0;
`
export const SearchInput = styled.input`
cursor:pointer;
height:100%;
width:70%;
border-radius:10px;

`
export const SearchResults = styled.div `
grid-row-start: 2;
display:grid;
grid-template-columns:50% 50%;
padding:10px;
`
export const ResultItem =``
export const MusicWrapper =styled.div `
display:grid;
padding:5px;
grid-template-rows: 8% 92%;
grid-template-columns: 60% 40%;
height:100vh;
width:100vw;
background-color: rgb(184, 144, 221);
@media only screen and (max-width: 768px)  {
    grid-template-columns: 100% ;

}

`
export const PlayerWrapper = styled.div`
display:grid;
// align-self:center;
justify-self:center;
grid-template-rows: 30% 20% 50%;
border-radius:20px;
width: 90vw;
height:40vh;
background:#5a5671f0;
color: wheat;
justify-content:center;
@media only screen and (min-width: 768px)  {
    height:600px;
    width:500px;
    grid-row-start:2;
    grid-column-start:2;
}

`
export const ControlWrapper = styled.div`
display:grid;
grid-template-rows: 70% 30% ;
grid-template-columns:20% 20% 20% 20% 20%;
grid-row-start: 2;
background:silver;
margin:10px;
border-radius:10px;

`
export const Pause = styled.div`
background :url("/Lo-fi Wireframe Kit (Community)/pause-circle.png");
background-repeat: no-repeat;
background-position: center;
`
export const Play = styled.div`
background :url("/Lo-fi Wireframe Kit (Community)/play-circle.png");
background-repeat: no-repeat;
background-position: center;
`
export const Shuffle = styled.div`
background :url("/Lo-fi Wireframe Kit (Community)/shuffle.png");
background-repeat: no-repeat;
background-position: center;
`

export const Repeat = styled.div`
background :url("/Lo-fi Wireframe Kit (Community)/repeat.png");
background-repeat: no-repeat;
background-position: center;
`
export const Prev = styled.div`
background :url("/Lo-fi Wireframe Kit (Community)/skip-back.png");
background-repeat: no-repeat;
background-position: center;
`
export const Next = styled.div`
background :url("/Lo-fi Wireframe Kit (Community)/skip-forward.png");
background-repeat: no-repeat;
background-position: center;
`
export const MusicDetailsWrapper = styled.div `

display:grid;
grid-template-columns: 50% 50%;
grid-template-rows: 50% 50%;
align-items:center;
justify-items:center;


`
export const ImageWrapper =styled.img `
padding:5px;
border-radius:10px;
grid-row-start:1;
grid-row-end:3;
`
export const SongTitle =styled.div `

`