import React from "react";
import { ControlWrapper, Play, PlayerWrapper, Next, Prev, Shuffle, Repeat } from "../components";


 export default function BloodPop(){
     return(
         <>
         <PlayerWrapper>
             <ControlWrapper> 
                 <Shuffle></Shuffle>
                 <Prev></Prev>
                 <Play>
                 </Play>
                 <Next></Next>
                 <Repeat></Repeat>
             </ControlWrapper>
         </PlayerWrapper>
         </>
     )
 }