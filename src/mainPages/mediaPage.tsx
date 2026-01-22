"use client"
import React, { useState, useEffect } from "react";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { media } from "@/Data/mediaData";
import { motion} from "framer-motion";
import Fadeinup from "@/animation/animateFadein";


const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function MediaPage() {
const items=media.flat();

const[current,setCurrent]=useState(0);
const[direction,setDirection]=useState<"right"|"left">("right");


useEffect(()=>{

   const id=setInterval(()=>{
   handleNext();

   },3000);

 return () => clearInterval(id);

},[items.length]);


const handleNext=()=>{
  setDirection("right");
 setCurrent((prev) => (prev + 1) % items.length);
    

}

const handlePrev=()=>{
    setDirection("left");
     setCurrent((prev) => (prev - 1 + items.length) % items.length);
   
   

}

  return (
    <section
      className={`${ubuntu.className} h-screen bg-[url('/mediaImg/bgmedia.webp')] bg-center bg-cover w-full overflow-hidden`}
    >
      
      <div className="h-full w-full flex flex-col pb-20  padding-custom"> 
        <Fadeinup>
        {/* Header */}
        <div className="h-[25%] w-full flex flex-col items-center justify-center pb-5 ">
          <h2 className="uppercase text-black text-[30px] font-normal pt-0.5 mb-[30px] after:content-[''] after:block after:h-1 after:w-23 after:bg-black after:rounded after:mx-auto">
            MEDIA
          </h2>
          <p className="text-center text-[18px] text-black">
            Here are all the latest happenings from the world of Tata Power Solar
          </p>
        </div>

        {/* Media Grid  for larger screen*/}
        <div className="hidden  h-[70%] w-full lg:grid  grid-cols-1 sm:grid-cols-[repeat(2,minmax(250px,450px))] justify-center auto-rows-[170px] gap-2 ">
          {media.flat().map((item, idx) => (
            <div
              key={idx}
              className="relative flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-[480px]"
            >
              {/* Image */}
              <aside
                className={`${
                  idx % 2 === 0 ? "order-1" : "order-2"
                } w-[30%] min-[420px]:w-[50%] flex-shrink-0 h-full`}
              >
                <Image
                  src={item.image}
                  alt="media image"
                  width={100}
                  height={50}
                  className="object-cover object-center w-full h-full"
                />
              </aside>

              {/* Text */}
              <aside
                className={`${
                  idx % 2 === 0 ? "order-2" : "order-1"
                } w-[70%] min-[420px]:w-[50%] h-full relative flex flex-col justify-center px-3`}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col w-full h-full"
                >
                  <strong className="text-[15px] text-[#da531a] block mb-[10px] font-light after:content-[''] after:block after:h-0.5 after:w-8 after:bg-black after:mt-[5px] after:rounded-md">
                    {item.year}
                  </strong>
                  <p className="text-[#575757] text-[12px] leading-snug">
                    {item.description}
                  </p>
                  <ChevronRightIcon className="h-[30px] w-[30px] text-white bg-[#739b39] absolute bottom-2 right-2 rounded-full p-1" />
                </a>
              </aside>
            </div>
          ))}
        </div>

        {/* Media rid for smaller screen */}
        
            
         <motion.div 
         key={current}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }} // allow only horizontal drag
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) {
              // dragged left → next slide
              handleNext();
            } else if (info.offset.x > 100) {
              // dragged right → prev slide
              handlePrev();
            }
          }}
         initial={{x:direction==="right"?300:-300,opacity:1}}
         animate={{x:0,opacity:1}}
         exit={{x:direction==="right"?-300:300,opacity:1}}
         transition={{duration:0.6,ease:"easeInOut"}}

         className="flex relative h-[70%] w-full lg:hidden py-10 justify-center px-6 overflow-hidden ">
        
            <div className="relative flex bg-white rounded-lg shadow-lg overflow-hidden min-h-[170px] h-fit  mx-auto max-w-[500px] "
            >
              {/* Image */}
              <aside
                className= "w-[30%] min-[420px]:w-[50%] flex-shrink-0 h-full"
              >
                <Image
                  src={items[current].image}
                  alt="media image"
                  width={100}
                  height={50}
                  className="object-cover object-center w-full h-full"
                />
              </aside>

              {/* Text */}
              <aside
                className=" w-[70%] min-[420px]:w-[50%] h-full relative flex flex-col justify-center px-3 pt-1 "
              >
                <a
                  href={items[current].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col w-full h-full "
                >
                  <strong className="text-[15px] text-[#da531a] block mb-[10px] font-light after:content-[''] after:block after:h-0.5 after:w-8 after:bg-black after:mt-[5px] after:rounded-md">
                    {items[current].year}
                  </strong>
                  <p className="text-[#575757] text-[12px] leading-snug">
                    {items[current].description}
                  </p>
                
                 
                </a>
                 
              </aside>
                <ChevronRightIcon className="h-[30px] w-[30px] text-white bg-[#739b39] absolute bottom-2 right-2 rounded-full p-1" />
            </div>


                {/* pageination dots */}
                  <div className="flex absolute bottom-2 max-[400]:bottom-10 z-10 items-center justify-center gap-2 mt-4">
                      {items.map((_, i) => (
                      <button
                      key={i}
                      onClick={() => setCurrent(i)} // jump to index
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        i === current ? "bg-yellow-400" : "bg-white"
                        }`}
                        />
                      ))}
                  </div>
          
        </motion.div>

        
                        

        



       


           

        </Fadeinup>
      </div>
      
    </section>
  );
}
