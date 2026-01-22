"use client";
import { useEffect, useState } from "react";

export function indexUpdateEffect<T>(Data: T[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, SetnextIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"right" | "left">("right");

useEffect(()=>{
   const id =setInterval(()=>{
       setDirection("right")
       const uI = (currentIndex+1)%Data.length;
       SetnextIndex(uI);
   
            setTimeout(()=>{
              
              setCurrentIndex((ci)=>(ci+1)%Data.length);
               SetnextIndex(null);

            },1000);
   },5000);

   return()=>clearInterval(id);


},[currentIndex, Data.length]);


const handleNext=()=>{

    setDirection("right");
     setCurrentIndex((ci)=>(ci+1)%Data.length);
}

const handlePrev=()=>{
     
   
     setDirection("left");
      setCurrentIndex((ci)=>((ci-1)+Data.length)%Data.length);

}

return{currentIndex,direction,nextIndex,setCurrentIndex,handleNext,handlePrev}



}
