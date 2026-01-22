"use client";
import React, { useState ,useEffect} from "react";
import Image  from "next/image";
import { Ubuntu } from "next/font/google";
import { ChevronLeftIcon,ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion} from "framer-motion";
import { feaSlides } from "@/Data/FeatureData";
import Fadeinup from "@/animation/animateFadein";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // choose weights you need
});

const MotionImage = motion(Image);



export default function featuredProjects(){
 const[index,SetIndex]=useState(0);
    const[nextIndex,SetNewIndex]=useState<number | null>(null);
     
   const DURATION = 0.8;


 useEffect(()=>{
       const id=  setInterval(()=>{
          handleNext();
         },3000);
 
         return()=>clearInterval(id);
     }
     ,[index]);
 
 
  const handleNext = () => {
   const ni = (index + 1) % feaSlides.length;
   SetNewIndex(ni);
 };
 
 const handlePrev = () => {
   const ni = (index - 1 + feaSlides.length) % feaSlides.length;
   SetNewIndex(ni);
 };



type HighlightedTextProps = {
  text: string;
};

 function HighlightedText({ text }: HighlightedTextProps) {
  // Split into parts, keeping <b>...</b> and <strong>...</strong> as separate chunks
  const parts = text.split(/(<b>.*?<\/b>|<strong>.*?<\/strong>)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("<b>")) {
          return (
            <span key={i} className="text-[18px] font-bold text-white ">
              {part.replace(/<\/?b>/g, "")}
            </span>
          );
        }
        if (part.startsWith("<strong>")) {
          return (
            <span key={i} className="text-[#00e4ff] text-[25px] font-bold">
              {part.replace(/<\/?strong>/g, "")}
            </span>
          );
        }
        return (
          <span key={i} className="text-white">
            {part}
          </span>
        );
      })}
    </>
  );
}


return(
 
    







    <section className={`${ubuntu.className} min-h-screen h-screen w-full `}>
        <div className="grid h-full w-full grid-cols-1 min-[400px]:grid-cols-2 ">
            <div className="h-full max-[400px]:hidden relative pt-[80px]">     
              
                <Image 
                src={feaSlides[index].image}
                alt={"featuredProject.img"}
                fill
                className="object-cover"
                
                />

               {nextIndex !== null && (
                                     <motion.div
                                     key={nextIndex}
                                     initial={{ x: "-100%" }}
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
                                         src={feaSlides[nextIndex].image}
                                         alt="project-images"
                                         fill
                                         className="object-cover"
                                     />
                                     </motion.div>
                                     )}

            
            </div>
            <div className="h-full relative  pt-[80px]">
                
                   <Image 
                   src={"/FeaturedImg/featuredbg.jpg"}
                   alt={"backround.img"}
                   fill
                   className="object-cover"
                   
                   />

                   <Fadeinup>
                   <div className="absolute h-full  text-white  left-[10%] right-[10%]">

                       <h1 className="mt-5 max-[400px]:text-[25px] max-[400px]:mb-[15px] max-[600px]:text-[22px] text-[28px] mb-[30px] font-extrabold after:content-[''] after:block after:h-0.5 after:w-1/6 after:rounded after:bg-white">FEATURED PROJECTS</h1>

                       <motion.h3
                       key={index} 
                       initial={{x:600,opacity:0.7}}
                       animate={{x:0,opacity:1}}
                       transition={{ duration: DURATION, ease: "easeInOut" }}
                       
                      
                       className="max-[400px]:text-[25px] max-[400px]:mb-[15px]  max-[600px]:mb-[10px] max-[600px]:text-[15px] mb-[30px] text-[22px]">{feaSlides[index].header}</motion.h3> 

                       
                       <motion.p
                          key={`desc-${index}`} 
                          initial={{ x: 600, opacity: 0.7 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: DURATION, ease: "easeInOut" }}
                          
                       className="text-[#c5c9cf] max-[400px]:text-[14px] max-[400px]:mb-[20px]  max-[600px]:mb-[10px] max-[600px]:text-[9px] leading-tight text-[19px] mb-[30px]">{feaSlides[index].description}</motion.p>


                       {feaSlides[index].iconExist?
                       <>
                       <motion.p
                          key={`line-${index}`} 
                          initial={{ x: 600, opacity: 0.7 }}
                          animate={{ x: 0, opacity: 1 }}
                         transition={{ duration: DURATION, ease: "easeInOut" }}
                          className="h-0.3 mb-[30px] max-[600px]:mb-[10px]   text-[#c5c9cf]  w-full bg-[#c5c9cf] border rounded">

                        </motion.p>

                       <motion.div
                          key={`icon-${index}`} 
                          initial={{ x: 600, opacity: 0.7 }}
                          animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: DURATION, ease: "easeInOut" }}
                       className="flex justify-items-start gap-3 mb-[10px]">
                      
                      
                        <Image 
                        src={feaSlides[index].points[0].icon}
                        alt={"icon.img"}
                        height={70}
                        width={100}
                        className=" max-[400px]:h-20 max-[400px]:w-20 max-[700px]:h-10 max-[700px]:w-13"
                         
                        />
                        
                        
                        <strong 
                         className="flex flex-col justify-center">
                         <HighlightedText text={feaSlides[index].points[0].text} />   

                        </strong>
                          
                       </motion.div>
                       <motion.p 
                        key={`line2-${index}`} 
                        initial={{ x: 600, opacity: 0.7 }}
                        animate={{ x: 0, opacity: 1 }}
                       transition={{ duration: DURATION, ease: "easeInOut" }}
                       
                       className="h-0.3 mb-0.5  text-[#c5c9cf]  w-full bg-[#c5c9cf] border rounded">

                       </motion.p>
                       </>
                        :
                        null
                       
                    
                    
                    
                    }

                        { feaSlides[index].knowmore?
                         <motion.a
                        key={`anchor-${index}`} 
                        initial={{ x: 600, opacity: 0.7 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: DURATION, ease: "easeInOut" }}

                          href={feaSlides[index].link}
                          className="inline-flex mt-[20px]">
                                                    <span className="h-[2px] mb-2  mr-3">
                                                        <Image src={"/arrow.png"} alt="arrow-img" height={10} width={50}  />  
                                                    </span>
                                                    <p className="  text-[#ffd200]  text-sm italic cursor-pointer ">Know more</p>
                                                </motion.a>:null
                        
                       }

                   </div>
                   </Fadeinup>
                                       {/* Prev Button */}
                                       <div className="absolute bottom-5 right-16 max-[400px]:bottom-15 ">
                                       <button
                                           onClick={handlePrev}
                                           className="flex items-center justify-center h-[40px] w-[40px] rounded-full transition"
                                       >
                                           <ChevronLeftIcon className="h-[24px] w-[24px] text-white cursor-pointer" />
                                       </button>
                                       </div>
                   
                                       {/* Next Button */}
                                       <div className="absolute bottom-5 right-3 max-[400px]:bottom-15">
                                       <button
                                           onClick={handleNext}
                                           className="flex items-center justify-center h-[40px] w-[40px] rounded-full  transition"
                                       >
                                           <ChevronRightIcon className="h-[24px] w-[24px] text-white cursor-pointer" />
                                       </button>
                                       </div>

            </div>







        </div>
    </section>

);







}