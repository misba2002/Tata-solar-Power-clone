"use client";
import React from "react";
import { useState } from "react";
import { Ubuntu } from "next/font/google";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { ourSlide } from "@/Data/OurAchieData";
import {motion} from "framer-motion";
import Fadeinup from "@/animation/animateFadein";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function TextExtracter({ text }: { text: string }) {
  const parts = text.split(/(<strong>.*?<\/strong>)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("<strong>") ? (
          <div key={i} className="text-[#626262] font-extrabold pt-[10px] mb-[10px]">
            {part.replace(/<\/?strong>/g, "")}
          </div>
        ) : (
          <p key={i}>{part}</p>
        )
      )}
    </>
  );
}

export default function OurAchievements() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const handleNext = () => {
      setDirection("next");
    setIndex((index + 1) % ourSlide.length);}
  const handlePrev = () =>{
    setDirection("prev");
   setIndex((index - 1 + ourSlide.length) % ourSlide.length);
  }

  return (
    <section
      className={`h-screen w-full bg-[url('/ourAchieveImg/parallax-5.webp')] bg-cover bg-center ${ubuntu.className}  grid grid-cols-2 max-[600px]:grid-cols-1  grid-auto-rows items-start  max-[600px]:pb-10 max-[600px]:h-auto`}
    >
      <Fadeinup>
      <div className=" relative  min-h-[450px] h-fit w-full text-white pt-[80px] overflow-hidden  max-[600px]:mb-2 max-[600px]:min-h-[250px]">
        <div className=" absolute left-[20%]   flex flex-col items-start max-[600px]:left-[10%] max-[400px]:left-[5%] ">
          <h2 className="text-[30px] font-bold after:mt-[20px] mb-[30px] mt-[30px]   uppercase after:content-[''] after:block after:h-[2px] after:w-[110px] after:bg-white after:rounded after:text-[white]">
            our achievements
          </h2>
          <p className="text-[21px] max-[600]:text-[15px] ">
            34 years and counting: The Tata Power Solar journey at a glance, a history rich with experience and
            achievements.
          </p>
        </div>
      </div>
      </Fadeinup>
      
      
              <div className="relative h-full    overflow-hidden">
                <Fadeinup>
        <div className="absolute overflow-y-auto left-[0%] top-[110px] right-4 min-h-[400px] max-w-[450px] w-fit h-fit  bg-white  border flex flex-col overflow-hidden  max-[600px]:relative max-[600px]:left-auto max-[600px]:right-auto 
           max-[600px]:top-0 max-[600px]:w-[90%] max-[600px]:mx-auto max-[600px]:mt-0">
            <span className="absolute left-0 top-7.5 h-8 w-1 bg-black mr-2"></span>
          <motion.h3 
            key={index} 
                       initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                       animate={{x:0,opacity:1}}
                       transition={{ duration: 1, ease: "easeInOut" }}
          className="text-[#1062ae] pl-4 text-[30px] mb-[20px] mt-5 font-extrabold">
            {ourSlide[index].year}
          </motion.h3>
          <motion.h6 
           key={`h6-${index}`} 
                       initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                       animate={{x:0,opacity:1}}
                       transition={{ duration: 1, ease: "easeInOut" }}
          
          className="text-[#242424] text-[20px] mb-[20px] font-bold pl-4">{ourSlide[index].header}
          </motion.h6>
          <motion.div
           key={`div-${index}`} 
                       initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                       animate={{x:0,opacity:1}}
                       transition={{ duration: 1, ease: "easeInOut" }} 
          className="pl-4 text-[#626262] text-[15px] font-normal mb-[20px]">
          <TextExtracter text={ourSlide[index].description} />
          </motion.div>
          <motion.a
           key={`a-${index}`} 
                       initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                       animate={{x:0,opacity:1}}
                       transition={{ duration: 1, ease: "easeInOut" }}
          
          href="https://www.tatapowersolar.com/about-us/company-milestones/" className="pl-4">
            <button className="bg-[#e0561b] border cursor-pointer text-white w-25 h-8 hover:bg-[#cf2e2e]  text-center">Know more</button>
          </motion.a>
          {/* Prev Button */}
          <div className="absolute bottom-5 right-16 max-[400px]:bottom-15 ">
            <button onClick={handlePrev} className="flex items-center justify-center h-[40px] w-[40px] rounded-full transition">
              <ChevronLeftIcon className="h-[24px] w-[24px] text-black cursor-pointer" />
            </button>
          </div>
          {/* Next Button */}
          <div className="absolute bottom-5 right-3 max-[400px]:bottom-15">
            <button onClick={handleNext} className="flex items-center justify-center h-[40px] w-[40px] rounded-full  transition">
              <ChevronRightIcon className="h-[24px] w-[24px] text-black cursor-pointer" />
            </button>
          </div>
        </div>
        </Fadeinup>
              </div>
      

        
    </section>
  );
}
