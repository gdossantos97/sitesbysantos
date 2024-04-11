"use client";

import React from "react";
import { motion } from "framer-motion";
import {   slideInFromLeft,
    slideInFromRight,
    slideInFromTop, } from "@/app/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


const Services = () => {
    return (
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
          <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px]">
                Fullstack Developer / Web Design
              </h1>
            </motion.div>
    
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
              <span>
                Let's Build  
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  Something
                  {" "}
                </span>
                Out Of This World 🌎 
              </span>
            </motion.div>
    
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-400 my-5 max-w-[600px]"
            >
              My names Gabe and welcome to my site! I am a full stack developer with 
              a focus on design and user expeirence. My Goal is to make your business 
              stand out from the rest and perform like the best.  
            </motion.p>
            <motion.div
              variants={slideInFromLeft(1)}>
    
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
 Shimmer
</button>
            </motion.div>
          </div>
    
          <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center items-center"
          >
            <Image
              src="/mainIconsdark.svg"
              alt="work icons"
              height={650}
              width={650}
            />
          </motion.div>
        </motion.div>
      );
    }

export default Services
