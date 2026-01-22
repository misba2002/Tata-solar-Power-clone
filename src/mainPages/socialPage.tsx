"use client"
import React, { useEffect, useState } from "react";
import { Ubuntu } from "next/font/google";
import { FaFacebook,FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { OptionButton } from "@/animation/OptionButton";
import Image from "next/image";
import { FaShare } from "react-icons/fa";  
import { infoSlides } from "@/Data/socialMediaData"; 
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";   
import Fadeinup from "@/animation/animateFadein";


 const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});






export default function SocialPage(){

const[index,setIndex]=useState(1);
const[isTransitioning,setIsTransitioning]=useState<Boolean>(true);
const[cardShow,setCardShow]=useState(3);
const[filter,setFilter]=useState<"all" |"twitter" | "youtube" | "facebook">("all");


const containerWidth=340;

const filterSlides=infoSlides.filter((slide)=>{

    if(filter==="all") return true;

    return slide.thumbnail.toLowerCase()===filter;

})


const slides =
  filterSlides.length > cardShow
    ? [
        ...filterSlides.slice(-cardShow), // clones at the start
        ...filterSlides,
        ...filterSlides.slice(0, cardShow), // clones at the end
      ]
    : [...filterSlides]; // if fewer slides, just show them


useEffect(() => {
  if (filterSlides.length > cardShow) {
    setIndex(cardShow); // safe middle position
  } else {
    setIndex(0); // no need for offset if only 1–2 cards
  }
}, [filter, cardShow, filterSlides.length]);

useEffect(()=>{

    const updateCardShow=()=>{
        if(window.innerWidth < 640){
            setCardShow(1);
        }
        else if(window.innerWidth < 1024){
            setCardShow(2);
        }
        else {
            setCardShow(3);
        }
    }
    
    updateCardShow();
    window.addEventListener("resize",updateCardShow);

    

    return()=>window.removeEventListener("resize",updateCardShow); 


},[])

const nextSlide=()=>{
    if (filterSlides.length <= cardShow) return;

    setIndex((prev)=>prev+1);
    setIsTransitioning(true);
}

const prevSlide=()=>{
     if (filterSlides.length <= cardShow) return;
    setIndex((prev)=>prev-1);
    setIsTransitioning(true);
}

useEffect(()=>{

    if (filterSlides.length <= cardShow) return; // no looping if too few

    if(index>=slides.length-cardShow){
       setTimeout(()=>{
        setIsTransitioning(false);
        setIndex(cardShow);


       },500);
    }

    if(index<cardShow){

        setTimeout(() => {
            setIsTransitioning(false);
            setIndex(slides.length-(cardShow * 2));

        }, 500);
    }

},[index,slides.length,cardShow]);


useEffect(() => {


  const interval = setInterval(() => {
    nextSlide();
  }, 3000); // ⏱ every 3s

  return () => clearInterval(interval); // cleanup on unmount
}, []);







    return(
        <section className={`${ubuntu.className} h-screen w-full bg-[url('/social/home-slide8Bg.jpg')] bg-cover
          bg-center pt-[80px] overflow-hidden  `} >
             <Fadeinup>
            <div className="flex flex-col h-full max-w-min items-center pt-5  mx-auto  relative">
                

               <h2 className="text-black uppercase  text-lg min-[400]:text-[25px] font-normal after:content-['']  after:block after:h-0.2 after:w-25 after:rounded after:bg-black  after:mx-auto after:mt-3 after:pt-0.5">Tata Power Solar <strong className="font-medium">on Social</strong></h2>
               
               <div className="flex flex-col items-start mx-auto max-w-[500px]  min-w-300 my-10 min-[500px]:mt-0   min-h-100 h-auto w-auto overflow-hidden ">
                       
                        <article className=" flex gap-3 self-start items-center   ml-10 ">

                        <span  className="cursor-pointer flex gap-1 justify-center text-black items-center ">
                        <OptionButton selected={filter === "all"} onClick={()=>{setFilter("all")} }></OptionButton>
                        <span>All</span>
                        </span>     
                        
                        <span  className="cursor-pointer flex gap-1 justify-center items-center ">
                        <OptionButton selected={filter === "facebook"} onClick={()=>{setFilter("facebook")} }></OptionButton>
                        <FaFacebook  className="text-blue-500 w-5 h-5"/>
                        </span> 

                        <span  className="cursor-pointer flex gap-1 justify-center items-center ">
                        <OptionButton selected={filter === "twitter"} onClick={()=>{setFilter("twitter")} }></OptionButton>
                        <FaSquareXTwitter  className="text-black w-5 h-5"/>
                        </span> 

                        <span  className="cursor-pointer flex gap-1 justify-center items-center ">
                        <OptionButton selected={filter === "youtube"} onClick={()=>{setFilter("youtube")} }></OptionButton>
                        <FaYoutube  className="text-red-500 w-5 h-5"/>
                        </span>    
                        
                        
                        </article>


                        <div className="flex w-[90%] max-[600px]:w-[95%] overflow-hidden ml-10  h-full my-2 relative  ">
                          
                            <ul className="flex gap-5 items-center mt-5 max-[360px]:w-auto "
                                style={
                                    filterSlides.length > cardShow
                                    ? {
                                        transform: `translateX(-${index * (containerWidth + 20)}px)`,
                                        transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
                                        width: `${slides.length * containerWidth}px`,
                                        }
                                    : {
                                        transform: "none", // no shift
                                        transition: "none",
                                        width: `${slides.length * containerWidth}px`,
                                        }
                                }
                            >
                                {slides.map((Slide,index)=>(
                                <li key={index} className="flex flex-col h-[97%] flex-shrink-0 w-[340px]   ">
                                    <div className=" w-[320px] h-100   ">
                                        <a href={Slide.link} className="h-full" >
                                        <div className="relative">
                                                <Image
                                                src={Slide.imgsrc}
                                                alt="social-media-img"
                                                height={250} 
                                                width={350}
                                                className="object-cover h-[200px] rounded-lg "
                                                
                                                />

                                                <div className="h-40 min-[500px]:h-37 max-h-max  flex flex-col  absolute top-[97%] text-[#484848] w-[95%] bg-white left-1/2 -translate-x-1/2 border-t-5 border-t-[#335f9b]">
                                                <p className="h-full w-full text-center mt-2 p-2 pb-0 text-lg">{Slide.description||" "}
                                            

                                                </p>
                                                
                                               <span> <FaShare  className="mx-auto"/></span>
                                                

                                                </div>


                                                {Slide.thumbnail==="youtube"?
                                                <button className="bg-red-500 h-[40px] w-[80px] rounded-[999px] absolute top-0 left-1/2  -translate-x-1/2 -translate-y-1/2 z-50">
                                                <FaYoutube className="mx-auto h-5 w-5 text-white bg-red-500" />
                                                </button>
                                                :
                                                <button className="bg-black h-[40px] w-[80px] rounded-[999px] absolute top-0 left-1/2  -translate-x-1/2 -translate-y-1/2 z-50">
                                                 <FaSquareXTwitter className="mx-auto h-5 w-5 text-white " /> 
                                                </button>
                                                
                                            }
                                       
                                        

                                        
                                        </div>
                                       

                                        </a>
                                         
                                    

                                      
                                    </div>
                 
                                </li>



                                ))}


                            </ul>

                            </div>

                            
                        


              






               </div>

               

                <ChevronLeftIcon onClick={prevSlide} className="h-10 w-10 absolute left-[15] text-black top-1/2 -translate-x-1/2  z-10 " />
                <ChevronRightIcon onClick={nextSlide} className="h-10 w-10 absolute right-[15] text-black top-1/2 translate-x-1/2  z-10 " />


            </div>
            </Fadeinup>







             
        </section>
    );
}