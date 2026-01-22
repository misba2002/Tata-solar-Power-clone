"use client"
import { useRef,ReactNode,useState,useEffect } from "react";
import { easeInOut,  motion,  useInView } from "framer-motion";

interface AnimationProps{
    children:ReactNode,
    className?:string
}

export default function Fadeinup({children,className=""}:AnimationProps){

      const ref = useRef(null);

  // framer-motion's built-in hook
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  




    return(
        <motion.div
        ref={ref}
        initial={{y:200,opacity:0}}
        animate={ isInView?{y:0,opacity:1}:{}}
        transition={{duration:1.2,ease:easeInOut}}
        className={className}
        >
            {children}

        </motion.div>
    );
}