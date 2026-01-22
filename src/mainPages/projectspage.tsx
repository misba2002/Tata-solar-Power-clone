"use client"

import React from "react";
import Image from "next/image";
import { useState,useEffect } from "react";
import { projectSlide } from "@/Data/ProjectPageData";
import { ChevronLeftIcon,ChevronRightIcon } from "@heroicons/react/24/solid";
import { Ubuntu } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fadeinup from "@/animation/animateFadein";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // choose weights you need
});


export default function Projectpage(){

    const[index,SetIndex]=useState(0);
    const[nextIndex,SetNewIndex]=useState<number | null>(null);
     
   const DURATION = 0.8;

   // ✅ Helper for highlighting <samp>
function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/(<samp>.*?<\/samp>)/g);

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("<samp>") ? (
          <span key={i} className="text-[#ffd200] max-[450px]:font-light font-bold">
            {part.replace(/<\/?samp>/g, "")}
          </span>
        ) : (
          <span key={i} className="text-white">
            {part}
          </span>
        )
      )}
    </>
  );
}


    useEffect(()=>{
      const id=  setInterval(()=>{
         handleNext();
        },3000);

        return()=>clearInterval(id);
    }
    ,[index]);


 const handleNext = () => {
  const ni = (index + 1) % projectSlide.length;
  SetNewIndex(ni);
};

const handlePrev = () => {
  const ni = (index - 1 + projectSlide.length) % projectSlide.length;
  SetNewIndex(ni);
};
     // animation variants (both for text + image)
  const slideVariants = {
    initial: { x: "100%", opacity: 1,position: "absolute" },
    animate: { x: "0%", opacity: 1 ,position: "absolute"},
    exit: { x:"0%", opacity: 1 ,position: "absolute"},
  };





    return(

        <section className="h-full  w-full overflow-hidden  ">

            <div className={`h-full w-full grid grid-cols-2 max-[700px]:grid-cols-1 ${ubuntu.className} `}>
                
                <div className="min-h-screen  max-[450px]:w-full relative ">
                    
                        <Image
                        src={"/projectpage-images/projectpage-bg.jpg"}
                        alt="project-background.img"
                        fill
                        className="object-cover "

                    
                         />

                    
                   
                        <Fadeinup>
                        <div className="absolute  max-[450px]:top-[10%] flex flex-col gap-1 items-start h-full left-[10%] right-[10%] top-[80px] mx-auto ">
                          <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    variants={slideVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.1, ease: "easeInOut" }}
                                    className="w-full"
                                >
                           <h2 className=" text-[19px] font-light  min-[450px]:text-[20px] min-[900px]:text-[22px] text-white  min-[450px]:font-bold mb-[3px] min-[450]:mb-8px  ">{projectSlide[index].header}</h2>
                           <p className="  text-[18px] font-light min-[450px]:text-[19px] min-[900px]:text-[21px] text-white  min-[450px]:font-normal  mb-[1px]  min-[900px]:mb-1">{projectSlide[index].description}</p>
                           <div className="flex flex-col gap-8 min-[500px]:gap-5 h-fit  w-full justify-between">
                           {projectSlide[index].points.map((point,i)=>(
                           <div key={i} className="flex items-start  gap-1">
                              <div className="relative w-25 h-15  min-[450px]:w-25  min-[450px]:h-15">  
                                    <Image
                                    src={point.icon}
                                    alt={"teaicon"}
                                    fill
                                    className="object-cotain mx-1   self-center" 
                                    />
                              </div>
                              <p className=" pl-2 pr-0 mr-0 self-center mb-1.5 text-[15px] font-light min-[450px]:text-[15px] min-[900px]:text-[22px]:">
                              <HighlightedText text={point.text} />
                              </p>
                            </div>
                        
                          ))}
                        </div>

                       <a  href={projectSlide[index].link} 
                        className="inline-flex mt-[20px]">
                            <span className="h-[2px] mb-2  mr-1">
                                <Image src={"/arrow.png"} alt="arrow-img" height={10} width={50}  />  
                            </span>
                            <p className="  text-[#ffd200]  text-sm italic cursor-pointer ">Know more</p>
                        </a>
                        </motion.div>
                     </AnimatePresence>
                       </div>
                       </Fadeinup>
                   {/* Prev Button */}
                    <div className="absolute bottom-20 right-16 ">
                    <button
                        onClick={handlePrev}
                        className="flex items-center justify-center h-[40px] w-[40px] rounded-full transition"
                    >
                        <ChevronLeftIcon className="h-[24px] w-[24px] text-white cursor-pointer" />
                    </button>
                    </div>

                    {/* Next Button */}
                    <div className="absolute bottom-20 right-3">
                    <button
                        onClick={handleNext}
                        className="flex items-center justify-center h-[40px] w-[40px] rounded-full  transition"
                    >
                        <ChevronRightIcon className="h-[24px] w-[24px] text-white cursor-pointer" />
                    </button>
                    </div>

                  
                  


                    
                   

                </div>
                
                <div className="h-full max-[450px]:hidden relative overflow-hidden">
                    {/* Base: current slide stays visible */}
                    <div className="absolute inset-0">
                        <Image
                        src={projectSlide[index].img}
                        alt="project-images"
                        fill
                        className="object-cover"
                        />
                    </div>

                    {/* Overlay: only when animating to nextIndex */}
                    {nextIndex !== null && (
                        <motion.div
                        key={nextIndex}
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: DURATION, ease: "easeInOut" }}
                        className="absolute inset-0"
                        style={{ zIndex: 1 }}
                        onAnimationComplete={() => {
                            // commit the change only after the new slide fully covered the old
                            SetIndex(nextIndex);
                            SetNewIndex(null);
                        }}
                        >
                        <Image
                            src={projectSlide[nextIndex].img}
                            alt="project-images"
                            fill
                            className="object-cover"
                        />
                        </motion.div>
                        )}
                </div>




            </div>


        </section>
    );
}