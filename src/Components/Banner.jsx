import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-10 h-screen pl-20 bg-[#FECA25] ">
      <div className=" flex justify-center items-center">
        <div>
          <h3 className="text-lg font-semibold"> Hi! It&apos;s </h3>
          <h1 className="font-extrabold text-7xl">Kazi Sami Ullah</h1>
          <h2 className="text-xl font-bold">
            An Aspiring Web Developer <br />
            Passionate About Creating Beautiful and Functional Websites
          </h2>
        </div>
      </div>
      <div className=" h-screen relative">
        <div className=" absolute bottom-0">
          <Image
            width="350"
            height="300"
            alt="Prifile image"
            src={"https://i.ibb.co/6Jfwkmq/2.png"}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
