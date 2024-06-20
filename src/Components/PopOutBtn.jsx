"use client"
import React, { useState } from 'react';
import { HiHome } from "react-icons/hi2";


const PopOutBtn = ({icon, text}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="inline-block relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className={`h-10 flex items-center relative px-2 py-2 rounded-full bg-black  text-white border-none cursor-pointer overflow-hidden transition-all duration-300 ${isHovered ? 'w-52 bg-opacity-50' : 'w-10 bg-opacity-70'}`}>
          
          <span className={`absolute 
           whitespace-nowrap 
            transition-all duration-300
             ${isHovered ? 'right-1/2 transform translate-x-1/2' : 'hidden'}`}>
            {/* Here is the text! */}
            {text}
          </span>
          <span className={` text-2xl `}>
            {/* <HiHome/> */}
          {icon}
          </span>
        </button>
      </div>
    );
};

export default PopOutBtn;