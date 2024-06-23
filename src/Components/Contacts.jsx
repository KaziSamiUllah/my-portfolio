import React from "react";
import { MdAddCall, MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import MapLeaflet from "./MapLeaflet";

const Contacts = () => {
  return (
    <div id="contact">
     
      <div className="flex flex-col items-center  justify-center min-h-screen py-12">
      <h1 className="text-center my-10 text-3xl">Contact me</h1>
        <div className="grid grid-cols-2 gap-20 w-10/12">
          <div className="flex justify-center items-center">
          <div className="text-xl space-y-5 ">
            <div className="bg-gray-100 p-5 rounded-lg drop-shadow-lg">
              <div className="flex flex-row items-center gap-5">
                <MdAddCall className="text-green-500" /> <a href="tel:+8801767941060">+8801767941060</a>
              </div>
              <div className="flex flex-row items-center gap-5">
                <MdEmail className="text-blue-500" />{" "}
                <a href="mailto:samiullahsagor@outlook.com">
                  samiullahsagor@outlook.com
                </a>
              </div>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg drop-shadow-lg">
              <h1 className="text-center mb-5">Social</h1>
              <div className="flex flex-row items-center justify-center text-5xl gap-24 ">
                <div className="flex flex-row items-center gap-5">
                  <a href="https://github.com/KaziSamiUllah">
                    <FaGithub />
                  </a>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <a href="https://www.linkedin.com/in/kazi-sami-ullah/">
                    <FaLinkedin className="text-blue-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div>
            <MapLeaflet></MapLeaflet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
