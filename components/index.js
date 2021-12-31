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
height:5vh;
width: 10vw;
border-radius:20px;
border:0;
`
export const SearchInput = styled.input`

width:50%;

`
export const PlayerWrapper = styled.div`
display:grid;
grid-template-rows: 38% 22% 40%;
height:500px;
width:500px;
border-radius:20px;
background:#5a5671f0;
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
export const PlayPause = styled.div`
border-radius:170px;
border:3px solid black;

`