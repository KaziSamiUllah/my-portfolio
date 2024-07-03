"use client";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out-sine',
      delay: 50,
      offset: 120,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div data-aos="zoom-in" id="about" className="text-center py-20 px-5 lg:px-20 min-h-screen flex justify-center items-center">
      <div>
        <div className="text-5xl">About Me</div>
        <p className="lg:w-3/5 mx-auto py-10 text-xl text-justify">
          Welcome to my portfolio! As I embark on my journey in the dynamic
          field of web development, I am at the beginning stages of building my
          expertise. My adventure in technology started with earning a Bachelor
          of Science in Electronics and Telecommunication Engineering from the
          International Islamic University Chittagong. Since graduation, I have
          dedicated myself to acquiring practical experience and enhancing my
          skills in web development. I am based in Chittagong, Bangladesh, and I
          have a keen interest in both front-end and back-end development. My
          professional journey has equipped me with a robust foundation in IT,
          having worked as a Senior Executive (IT) at Meenhar Securities Ltd.
          and as a Deputy Engineer at Broad Band Telecom Services Ltd. These
          roles have honed my technical skills and reinforced my passion for
          problem-solving and innovation in technology.
        </p>
      </div>
    </div>
  );
};

export default About;
