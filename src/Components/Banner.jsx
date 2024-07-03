import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className=" flex flex-col lg:flex-row gap-10 h-screen pl-20 bg-[#FDFFD2] pt-40 lg:pt-0">
      {" "}
      {/* bg-[#FECA25] */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <div className="">
          <h3 className="text-lg font-semibold"> Hi! I&apos;m </h3>
          <h1 className="font-extrabold text-7xl">Kazi Sami Ullah</h1>
          <h2 className="text-xl font-bold my-2">
            An Aspiring{" "}
            <span className="text-4xl font-bold text-[#667BC6] drop-shadow-md mx-2">
              Web Developer
            </span>{" "}
            <br />
          </h2>
          <h2 className="text-xl my-4">
            {" "}
            Passionate About Creating Beautiful and Functional Websites
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2 lg:relative">
        <div className="flex absolute bottom-0 h-1/2 lg:h-screen ">
          <Image
            layout="responsive"
            width={400}
            height={500}
            // objectFit="cover"
            alt="Prifile image"
            src={"https://i.ibb.co/6Jfwkmq/2.png"}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
