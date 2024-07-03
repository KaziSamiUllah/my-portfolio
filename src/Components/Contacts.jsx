import React from "react";
import { MdAddCall, MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// import MapLeaflet from "./MapLeaflet";

const Contacts = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50"
    >
      <h1 className="text-center mb-10 text-3xl font-bold">Contact Me</h1>
      <div className="w-11/12  flex flex-col lg:flex-row justify-center gap-10 ">
        <div className="bg-gray-100 p-5 rounded-lg drop-shadow-lg  text-center flex justify-center items-center">
          <div className="text-2xl space-y-5 m-5">
            <div className="flex flex-row items-center gap-5 justify-left">
              <MdAddCall className="text-green-500 " />
              <a href="tel:+8801767941060" className="text-xl">
                +8801767941060
              </a>
            </div>
            <div className="flex flex-row items-center gap-5 justify-left">
              <MdEmail className="text-blue-500 " />
              <a href="mailto:samiullahsagor@outlook.com" className="">
                samiullahsagor@outlook.com
              </a>
            </div>
            <div>
              <a
                href="https://github.com/KaziSamiUllah"
                className="hover:text-gray-700 transition duration-300 "
              >
                <div className="justify-left items-center flex gap-5 text-2xl hover:scale-125 hover:translate-x-10 transition duration-300">
                  <FaGithub />
                  <h1>GitHub</h1>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/kazi-sami-ullah/"
                className="hover:text-blue-800 transition duration-300"
              >
                <div className="justify-left items-center flex gap-5  hover:scale-125 hover:translate-x-10 transition duration-300">
                  <FaLinkedin />
                  <h1>LinkedIn</h1>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg drop-shadow-lg lg:w-2/3 ">
          <h1 className="font-semibold text-2xl ">I live here</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d445.702970274446!2d91.81396033334977!3d22.331105336167823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1719942041667!5m2!1sen!2sbd"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
