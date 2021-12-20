import styled from "styled-components";
import { device } from "./device";
const bg = ''
export const MainWrapper = styled.div `
display:grid;

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
border-radius:30px;
`
export const Button = styled.button `
background-color: rgb(55, 104, 148);
color: white;
border:0;

`