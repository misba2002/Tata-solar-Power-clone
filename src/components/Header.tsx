"use client"
import React from "react";
import Image from "next/image";
import ExploreMenuOverlay from "@/mainPages/exploreMenu";
import { useState } from "react";
import { FiSearch } from "react-icons/fi"
import { footerColumns } from "@/Data/footerData";
import { FaChevronRight,FaChevronDown  } from "react-icons/fa";






export default function Header(){

   type SubList={label:string,link:string};
   type List={label:string,link?:string,sublink?:SubList[]};
   type Section={title:string,link?:string,lists?:List[]};
   type FooterColumn = {
  sections: Section[];
   };


    const [menuOpen, setMenuOpen] = useState(false);

    const [hover, setHover] = useState(false);
    const[hovered,setHovered]=useState<string | null>(null);
    const NAV_TITLES = ["About Us", "PROJECTS", "ROOFTOPS", "MANUFACTURING EDGE"];
    const allsections:Section[]=(footerColumns as FooterColumn[] ).flatMap((col)=>col.sections || []);
    const Nav_Sections=NAV_TITLES.map((t)=>allsections.find((s)=>s.title?.toLocaleLowerCase()===t.toLocaleLowerCase())).filter(Boolean);


    return(
        <>
    <header className="h-[80px]  fixed top-0 left-0 z-50 w-[100%] bg-white flex items-center cursor-pointer gap-2 max-[640px]:px-[10px] sm:px-[20px]  ">
        <div
         onClick={() => window.location.reload()}
        className=" flex-shrink-0 h-full w-[25%]  bg-white-500 flex items-center justify-start " > 
        <Image
        
        src={"/tata-power-solar-logo.jpg"}
        alt="tata.power.solar.img"
        width={250}
        height={50}
        className=" object-contain overflow-hidden "
       
    
        />
      

        </div>
        <div className="h-full w-[75%] flex flex-1  items-center min-[900px]:text-lg text-sm  justify-end ">
              <div className="h-full items-center hidden pr-0.5 min-[1200px]:flex">
            <ul className="flex  h-full items-center text-md cursor-pointer justify-between  whitespace-nowrap  ">
                {Nav_Sections.map((section)=>
                <li 
                key={section!.title}
                className=" flex relative h-full items-center group px-4 hover:text-white hover:bg-[#0e519d]"
                onMouseEnter={()=>setHovered(section!.title)}
                onMouseLeave={()=>setHovered(null)}
                >{section?.title}

                {hovered === section!.title && section!.lists && (
                    <ul className="absolute top-full left-0 bg-[#0e519d] text-white z-50 min-w-[200px] h-fit">
                     {section!.lists.map((item,i)=>
                      <li
                      key={i}
                      className="px-4 py-1 relative border-dotted border-b mx-2 text-md border-white"
                      >
                        <a href={item.link || "#"} className="block hover:text-gray-500">
                          {item.label} 
                        </a>

                       

                        {item.sublink && (
                            <div className=" group/subitem ">
                                            <span className="absolute left-[90%] bottom-2 text-sm">
                                            <FaChevronRight />
                                            </span>

                                            <ul className="absolute left-[80%] top-0 bg-[#0e519d] text-white z-50 min-w-[200px] h-fit hidden group-hover/subitem:block">
                                            {item.sublink.map((val, k) => (
                                                <li
                                                key={k}
                                                className="px-4 py-2 border-b border-dotted border-white hover:text-gray-400"
                                                >
                                                <a href={val.link || '#'}>{val.label}</a>
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                        )}

                         

                        
                       
                      </li>
                      

                    )}
                    </ul>


                )}
                

                </li>
               )} 
            </ul>
              </div>
              <div className="h-full w-[1px] hidden min-[1200px]:flex bg-gray-400  "></div>
              <a href="https://www.tatapowersolar.com/contact-us/enquiries/" className="min-w-[50px] sm:min-w-0 max-[640px]:text-sm max-[640px]:text-center" >
             <div className="flex flex-col sm:flex-row h-full justify-center gap-1 px-[15px] items-center   cursor-pointer bg-white-500 hover:text-[#0693e3] text-[#ff8a00]   font-medium min-[900px]:font-bold  "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
                <Image 
                src={hover ? "/enquire-icon-hover.png" : "/enquire-icon.png"}
                alt="enquiry.img"
                width={30}
                height={30}
                className=" object-contain" 
           
            
            
            
            
            />
            <span  className=" sm:whitespace-nowrap" ><strong>Enquiry Now</strong></span>
            </div>
            
            </a>
            <div className="h-full   min-w-[1px]  bg-gray-400"></div>
            <div  className={` ${menuOpen ?"bg-[#0a2844] text-white":""} h-full min-w-[50px] max-[640px]:text-sm max-[640px]:text-center  text-black `}>   
            <div 
             onClick={() => setMenuOpen((prev) => !prev)}
            className={`flex  flex-col sm:flex-row justify-center gap-1 max-[640px]:gap-3 px-[15px] items-center h-full w-full  group font-bold `} >

                        <div className="flex flex-col max-[640px]:gap-[6px] gap-[3px] cursor-pointer">
                            {/* Top line */}
                            <span className={`block w-6 h-[2px] bg-black rounded  ${menuOpen ? "rotate-45 translate-y-[7px] bg-white" : ""}`}></span>

                            {/* Middle line (animates on hover) */}
                            <span className={`block w-6 h-[2px]  bg-black rounded transition-all duration-300 origin-left group-hover:-translate-x-2 group-hover:w-8  ${menuOpen ? "opacity-0" : "opacity-100" }`}></span>

                            {/* Bottom line */}
                            <span className={`block w-6 h-[2px] bg-black rounded  ${menuOpen ? "-rotate-45 -translate-y-[7px] bg-white" : ""}`}></span>
                        </div>
                    <span  className="sm:whitespace-nowrap"><strong>Explore Menu</strong></span>
        
            </div>
            </div>
            <div className="h-full   min-w-[1px] bg-gray-400"></div>
            <a href="#" className="min-w-[50px] max-[640px]:text-sm max-[640px]:text-center text-black" >
            <div className="flex  flex-col sm:flex-row cursor-pointer justify-center gap-1  px-[15px] h-full w-full   items-center font-bold ">
                <FiSearch  size={30} className=" text-[#0693e3] object-contain lg:h-8 lg:w-13 "/>
                <span  className="sm:whitespace-nowrap"><strong>Search</strong></span>
            
            </div>
            </a>
            <div className="h-full min-w-[1px]   bg-gray-400"></div>
            <a href="https://tata.com/" className="min-w-[50px] ">
            <div className="w-[50px] h-[50px]   md:w-[70px] md:h-[70px] flex items-center justify-center">
                <Image
                src={"/tata-logo.png"}
                alt="logo.png"
                width={50}
                height={50}
                className=" object-contain"
            
            
                
                
                />
                

            </div>
            </a>

            

        
       


        </div>


     


    </header>

    
      {/* 🔥 Mount overlay outside the header */}
      <ExploreMenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    


    </>
    
    );
}