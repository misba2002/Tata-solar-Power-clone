"use client";
import React from "react";


type OptionButtonProps={
    selected:Boolean,
    children?:React.ReactNode,
    onClick:()=>void;

}


export  function OptionButton({selected,onClick,children}:OptionButtonProps){
    return(
        <button onClick={onClick} className="w-5 h-5 relative flex cursor-pointer items-center justify-center rounded-full bg-white shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] ">

            {selected &&
            <span className="w-2 h-2 mx-auto bg-[#4c4b4b] rounded-full top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2  absolute "></span>
             
             }
             
        </button>
    );
}