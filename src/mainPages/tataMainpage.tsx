"use client"


import React from "react";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Fadeinup from "@/animation/animateFadein";
 
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // choose weights you need
});

export default function Tatamainpage(){

return(
    <section className="w-full h-screen  overflow-hidden hide-scrollbar ">
        <div className="w-full h-screen  grid grid-cols-2 max-[450px]:grid-cols-1  ">
       
       {/* animation */}
       
        <div className=" h-full  relative ">
            <Image 
             src={"/parallax-tatapage.jpg"}
             alt="parallax.img"
             fill
             className="w-full h-full object-cover object-[center_bottom]"
            
            />
            <Fadeinup>
            <div className={`absolute ${ubuntu.className} max-[457px]:pt-[0%] h-full left-[10%] right-[10%] top[0%] flex pt-[80px] flex-col  items-center  `}> 
                <Image
                  src={"/jamsetji-tataProfile.webp"}
                  alt="jamsetji.image"
                  width={230}
                  height={200}
                  className="object-cover max-[1024px]:h-auto  max-[1024px]:w-auto mt-[20px] "
                 />
                 <h2 className=" uppercase  text-lg  sm:text-xl  text-white text-shadow-2xs font-extrabold py-[15px]  after:content-[''] after:block after:w-25 after:h-0.5 after:border after:bg-white after:mx-auto after:mt-0.3 leading-tight ">TATA GROUP</h2>
                 <p className="text-xs sm:text-lg  text-white mt-1  text-center ">Tata group is a global enterprise, headquartered in India, comprising over 100 independent operating companies and operating in more than 100 countries across six continents.</p>
                 <a href="https://www.tatapowersolar.com/about-us/our-heritage/" className="inline-flex mt-[10px]">
                 <span className="h-[2px] mb-2  mr-1">
                  <Image src={"/arrow.png"} alt="arrow-img" height={10} width={50}  />  
                 </span>
                <p className="  text-[#ffd200] italic  text-sm cursor-pointer ">Know more</p>
                </a>
                
            </div>
            </Fadeinup>
            
        </div>
        
        
        
        <div className=" h-full relative ">
            <Image
               src={"/parallax-tatapage2.webp"}
             alt="parallax.img2"
             fill
             className="w-full h-full object-cover object-center "

            />
            <Fadeinup>
            <div className={`absolute ${ubuntu.className} max-[457px]:pt-[0%] h-full left-[10%] right-[10%] top-[0%] flex  flex-col  items-center pt-[80px] `}>
                <Image
                  src={"/tp-factoryProfile.png"}
                  alt="factory-img"
                  width={230}
                  height={200}
                  className="object-cover max-[1024px]:h-auto  max-[1024px]:w-auto mt-[20px] "
                 />
                 <h2 className=" uppercase  text-lg sm:text-2xl  text-white text-shadow-2xs font-extrabold py-[15px] after:content-[''] after:block after:w-25 after:h-0.5 after:border after:bg-white after:mx-auto after:mt-0.3 leading-tight ">TATA POWER</h2>
                 <p className="text-xs sm:text-lg  text-white mt-1  text-center ">Tata Power is the country's largest integrated power utility and our solutions are powering change in some of the biggest cities in the world.</p>
                 <a href="https://www.tatapowersolar.com/about-us/our-heritage/#video" className="inline-flex mt-[10px]">
                 <span className="h-[2px] mb-2  mr-1">
                  <Image src={"/arrow.png"} alt="arrow-img" height={10} width={50}  />  
                 </span>
                <p className="  text-[#ffd200]  text-sm italic cursor-pointer ">Know more</p>
                </a>
                
            </div>
           </Fadeinup>
            
            
            
        </div >
        

        </div>
    </section>
);

}