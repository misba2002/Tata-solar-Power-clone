"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export default function ImagesMainpage() {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const[ismobile,setIsmobile]=useState(false);
  const[hovered,setHovered]=useState<number | null>(null);

const mobileImages=["/sm-images/sm-padmabushan.jpeg","/energy-storage-system-tata.jpg","/sm-images/sm-manufacturing.jpeg","/sm-images/sm-dependable.jpeg","/sm-images/sm-greener.jpeg","/sm-images/sm-rooftop.jpeg"];

  
  const Desktopimages = [
    "/padmabushan-desktop.jpg",
    "/energy-storage-system-tata.jpg",
    "/manufacturing-excellance.webp",
    "/dependable-as-sun.jpg",
    "/greener-tommarow.webp",
    "/roof-top.webp"
  ];

  const Links=[
    {
    name:"Padma Vibhushan Mr Ratan N Tata",
    link:"https://www.tata.com/newsroom/rnt",
    linkName:"Read Note",
    icon:"/slider-iconss/flower-white.png",
    iconTochnage:"/slider-iconss/flower-yellow.png" 
   },
    {
      name:"Powering the Country",
      link:"https://www.tatapowersolar.com/project/100mw-solar-pv-power-plant-with-40mw-120mwh-battery-energy-storage-system-at-rajnandgaon-chhattisgarh/",linkName:"Know more",
      icon:"/slider-iconss/energy-white.png",
      iconTochnage:"/slider-iconss/energy-yellow.png"
    },
    {
      name:"Manufaturing Excellence",
      link:"https://www.tatapowersolar.com/manufacturing-edge/solar-modules-and-cells/",
      linkName:"Know more",
      icon:"/slider-iconss/award-white.png",
      iconTochnage:"/slider-iconss/earth-yellow.png"
    },
    {
      name:"#Dependable AsTheSun",
      link:"https://www.tatapowersolar.com/project/450-mwp-solar-project-in-bikaner-rajasthan/",
      linkName:"Know more",
      icon:"/slider-iconss/sun-white.png",
      iconTochnage:"/slider-iconss/sun-yellow.png"
    },
    {
      name:"Envisaging a Greener Tomorrow",
      link:"",
      linkName:"",
      icon:"/slider-iconss/earth-white.png",
      iconTochnage:"/slider-iconss/earth-yellow.png"
    },
    {
      name:"#1 Rooftop Player",
      link:"https://solaroof.tatapower.com/",
      linkName:"Know more",
      icon:"/slider-iconss/roof-white.png",
      iconTochnage:"/slider-iconss/roof-yellow.png"
    
    }

  ]

  const fixedContact=[

    {
      link:"tel:18004198777",
      icon:"/fixed-icons/call.png",
      text:"Call us (Toll free)",
      text2:"1800 419 8777"
    },
     {
      link:"https://www.tatapowersolar.com/contact-us/enquiries/",
      icon:"/fixed-icons/email.png",
      text:"Contact",
      text2:"Us"
    },
     {
      link:"https://solarcalculator.arka360.com/",
      icon:"/fixed-icons/calculator.png",
      text:"Solar",
      text2:"Calculator"
    },
     {
      link:"https://www.tatapowersolar.com/contact-us/find-a-dealer/",
      icon:"/fixed-icons/location.png",
      text:"Dealer ",
      text2:"Locator"
    }
  ]

  




  useEffect(()=>{


    const checkSize=()=>setIsmobile(window.innerWidth<640);
    checkSize();
    window.addEventListener("resize",checkSize);
     return()=>window.removeEventListener("resize",checkSize);

  },[]);

  const images=ismobile?mobileImages:Desktopimages;




  useEffect(() => {
    const id = setInterval(() => {
      const ni = (index + 1) % images.length;
      setNextIndex(ni);

      // After animation finishes, commit to new index
      setTimeout(() => {
        setIndex(ni);
        setNextIndex(null); // remove transition image
      }, 2000); // match duration
    }, 5000);

    return () => clearInterval(id);
  }, [index, images.length]);

  return (
    <section className="relative  w-full max-[640px]:h-[500px]   h-screen">
      {/* Current image (static background) */}
      <motion.div
      key={index}
      drag={ismobile ? "x" : false}
     dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, info) => {
      if (info.offset.x < -50) {
      // Swipe left → next slide
        setIndex((prev) => (prev + 1) % images.length);
       } else if (info.offset.x > 50) {
      // Swipe right → previous slide
        setIndex((prev) => (prev - 1 + images.length) % images.length);
        }
     }}
       className="absolute inset-0"
       >
      <Image
        key={index}
        src={images[index]}
        alt="current image"
        fill
        priority
        className="object-cover "
      />
      </motion.div>

      {/* Next image (only shows when animating) */}
      {nextIndex !== null && (
        <Image
          key={nextIndex}
          src={images[nextIndex]}
          alt="next image"
          fill
          className="object-cover  transition-transform duration-2000 ease-in-out translate-x-0 animate-slide-in"
        />
      )}


      {/* KNOW MORE */}
      {Links[index] && Links[index].link && (
        
      <a href={Links[index].link} className="inline-flex mt-[20px] z-50  absolute bottom-[5%] max-[400px]:left-[130px]    max-[400px]:bottom-8  left-[45%]">
                                  <span className="h-[2px] mb-2 text-blue-600 mr-1">
                                      <Image src={"/arrow.png"} alt="arrow-img" height={10} width={50}  />  
                                  </span>
                                  <p className="  text-[#ffd200]  text-lg italic cursor-pointer "> {Links[index].linkName || "Know more"}</p>
      </a>
      )}

      {/* PAGINATION DOT */}
      {ismobile && (
      <div className="flex absolute bottom-1 w-full items-center justify-center gap-2 z-50">
        {images.map((_, i) => (
        <button
        key={i}
        onClick={() => setIndex(i)}
        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
          i === index ? "bg-yellow-400" : "bg-white"
        }`}
        />
       ))}
       </div>
      )}


      <div className="absolute left-0 top-[80px] bg-transparent  hidden lg:block h-full w-[250px] z-50">
        
            <ul className={`flex flex-col gap-5 ${ubuntu.className} `}>
              {Links.map((item, i) => {
    const isActive = i === index; // check if this link is active
    const displayNumber = String(((i % 5) + 1)).padStart(2, "0");
    return (
      <li
        key={i}
         className={`relative ${
        i !== Links.length - 1
          ? "after:content-[''] after:h-[0.5] after:w-[90%] after:bg-gray-300 after:block rounded after:my-1"
          : ""
      }`}    >
        <a
          href="#"
           onClick={(e) => {
          e.preventDefault();
           setIndex(i); // jump directly to that image
           setNextIndex(null); // clear transition if any
           }}
          className="flex w-full gap-1 items-center justify-start transition-colors duration-500"
        >
          <span className="relative w-[50px] h-[50px]">
            <Image
              src={isActive ? item.iconTochnage : item.icon} // change icon
              alt={`${item.name}.img`}
              fill
              className="object-contain transition-all duration-500"
            />
          </span>

          <span
            className={`w-[70%] transition-colors duration-500 ${
              isActive ? "text-yellow-400" : "text-white"
            }`}
          >
            {item.name}
          </span>
        </a>
        {/* Number only for active item */}
        {isActive && i !== Links.length - 1  &&(
          <span className="absolute right-0  bottom-[-5] text-yellow-400 font-bold">
            {displayNumber}
          </span>
        )}
      </li>
    );
  })}
            </ul>

          

          
          
          
          
      </div>


       <div className="hidden lg:flex absolute bottom-10 right-20   flex-col items-center   z-50 ">
            {[...Array(4)].map((_, i) => (
            <FaChevronDown
                key={i}
                className="text-[#ffd402] h-4 w-8 animate-arrowFlow"
                style={{ animationDelay: `${i * 0.2}s` }}
            />
            ))}
        </div>

        <div className=" hidden lg:block fixed right-0 bottom-20 z-50 w-[50px] max-w-[200px] h-[204px]">
            <div className="w-full h-full flex flex-col items-center bg-transparent gap-0.5 justify-center">
                {fixedContact.map((item,i)=>
                <motion.a
      key={i}
      href={item.link || "#"}
      onMouseEnter={() => setHovered(i)}
      onMouseLeave={() => setHovered(null)}
      animate={{
        width: hovered === i ? 300 : 50, // expand width
        backgroundColor:hovered===i?"#ee6b1a":"#ee6b1acc"
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-[50px] overflow-hidden bg-[#ee6b1acc]  flex items-center gap-2 pl-2"
    >
      <div className="relative w-[40px] h-[40px] flex-shrink-0">
        <Image src={item.icon} alt="icon" fill className="object-contain" />
      </div>

      {/* Text fades in on hover */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: hovered === i ? 1 : 0,
          x: hovered === i ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className="text-white text-sm font-medium"
      >
        {item.text}
        <br />
        {item.text2}
      </motion.div>
    </motion.a>

                
                
                )}

            </div>
            

        </div>

    </section>
    
  );
}
