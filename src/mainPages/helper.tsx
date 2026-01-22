"use client"
import React from "react";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import { dataslide } from "@/Data/helperData";
import { indexUpdateEffect } from "@/animation/indexUpdate";
import { motion, easeInOut } from "framer-motion";
import Fadeinup from "@/animation/animateFadein";


 const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Helperpage(){
    const{currentIndex,direction,nextIndex,setCurrentIndex,handleNext,handlePrev}=indexUpdateEffect(dataslide);
    return(
        <section className={`${ubuntu.className} h-screen w-full bg-[url('/helperImg/helperBg.webp')] bg-cover
          bg-center pb-[10px]  pt-[80px]`}> 

          
          <Fadeinup>
            <div className="hidden h-full w-full center-item md:flex max-[700px]:flex-col items-center justify-center gap-5 flex-shrink  px-5 pt-30 text-black ">
              
                   <div className="h-[250px] w-[300px] bg-white flex flex-col justify-center items-center text-center gap-1 py-1 lg:w-[250px] lg:h-[300px] ">
                    <Image 
                    src={"/helperImg/calc.icon.png"}
                    alt="icon"
                    height={50}
                    width={100}
                    className="object-cover"
                    
                    />
                    <a className="cursor-pointer" href="https://solarcalculator.arka360.com/" target="_blank" >
                    <strong className="after:content-[''] after:block after:h-0.5 after:w-15 after:bg-black after:mt-[5px] after:rounded-md after:mx-auto after:mb-3">Solar <br />Calculator
                    </strong>
                    <span>Calculate your energy savings </span>
                    </a>
                    </div>
                   <div className="h-[250px] w-[300px] bg-white flex flex-col justify-center items-center text-center gap-2 py-1 lg:w-[250px] lg:h-[300px] ">
                     <Image 
                    src={"/helperImg/enquiry-icon.png"}
                    alt="icon"
                    height={50}
                    width={100}
                    className="object-cover "
                    
                    />
                    <a className="cursor-pointer" href="https://www.tatapowersolar.com/contact-us/enquiries/" target="_blank" >
                    <strong className="mt-1 after:content-[''] after:block after:h-0.5 after:w-15 after:bg-black after:mt-[5px] after:rounded-md after:mx-auto after:mb-3">Quick <br />Enquiry
                    </strong>
                    <span>Click here to reach out to us</span>
                    </a>
                    </div>
                   <div className="h-[250px] w-[300px] bg-white flex flex-col justify-center items-center text-center gap-2 py-1 lg:w-[250px] lg:h-[300px]   ">
                     <Image 
                    src={"/helperImg/award-icon.png"}
                    alt="icon"
                    height={40}
                    width={80}
                    className="object-cover "
                    
                    />
                    <a className="cursor-pointer" href="https://www.tatapowersolar.com/about-us/awards/" target="_blank" >
                    <strong className="mt-1 after:content-[''] after:block after:h-0.5 after:w-15 after:bg-black after:mt-[5px] after:rounded-md after:mx-auto after:mb-3">Awards &amp; <br />Recognition
                    </strong>
                    <span>Our accomplishments at a glance</span>
                    </a>
                    </div>
                    

            </div>
            </Fadeinup>

            {/* for screen lesser than 768 */}
            <div className="flex relative h-full w-full  md:hidden max-[700px]:flex-col items-center justify-center gap-0 flex-shrink  px-5 pt-30 text-black overflow-hidden max-[400]:justify-start ">
                
               
                    <motion.div
                        key={`current-${currentIndex}`}
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
                        initial={{x:0, opacity: 1 }}
                        animate={{ x: nextIndex !== null  ?direction==="right"?-500: 500 : 0,opacity:1}}
                         transition={{duration:1,ease:easeInOut}}
                       
                   className="h-[60%] mx-auto absolute  w-[93%] bg-white flex flex-col justify-center items-center text-center gap-1 p-5 ">
                    <Image 
                    src={dataslide[currentIndex].icon}
                    alt="icon"
                    height={50}
                    width={100}
                    className="object-cover"
                    
                    />
                    <a className="cursor-pointer" href={dataslide[currentIndex].link} target="_blank" >
                    <strong className="after:content-[''] after:block after:h-0.5 after:w-15 after:bg-black after:mt-[5px] after:rounded-md after:mx-auto after:mb-3">{dataslide[currentIndex].header1} <br />{dataslide[currentIndex].header2}
                    </strong>
                    <span>{dataslide[currentIndex].description}</span>
                    </a>
                    </motion.div>

                    {nextIndex!==null &&
                     <motion.div
                      key={`desc-${nextIndex}`}
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
                     initial={{ x: direction === "right" ? 400 : -400, opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                    
                     transition={{duration:1,ease:easeInOut}}
                    
                     
                     
                     className="h-[60%] w-[93%] absolute bg-white flex flex-col justify-center items-center text-center gap-1 p-5 ">
                    <Image 
                    src={dataslide[nextIndex].icon}
                    alt="icon"
                    height={50}
                    width={100}
                    className="object-cover"
                    
                    />
                    <a className="cursor-pointer" href={dataslide[nextIndex].link} target="_blank" >
                    <strong className="after:content-[''] after:block after:h-0.5 after:w-15 after:bg-black after:mt-[5px] after:rounded-md after:mx-auto after:mb-3">{dataslide[nextIndex].header1} <br />{dataslide[nextIndex].header2}
                    </strong>
                    <span>{dataslide[nextIndex].description}</span>
                    </a>
                    </motion.div>
                    
                    
                    }

                    {/* pageination dots */}
                    <div className="flex absolute bottom-2 max-[400]:bottom-20 z-10 items-center justify-center gap-2 mt-4">
                        {dataslide.map((_, i) => (
                        <button
                        key={i}
                        onClick={() => setCurrentIndex(i)} // jump to index
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          i === currentIndex ? "bg-yellow-400" : "bg-white"
                          }`}
                          />
                        ))}
                      </div>
                   
                    
            </div>

          
            

        </section>
    );
}