import React from "react";
import { GiGraduateCap } from "react-icons/gi";

const Education = () => {
  return (
    <div id="education" className="min-h-screen w-8/12 lg:w-10/12 mx-auto mt-10 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row gap-10 lg:text-left text-center">
        <div className="text-8xl  text-center lg:text-left">
          <GiGraduateCap className="mx-auto"/>
        </div>
        <div className="text-lg">
          <h1>I graduated with a</h1>
          <h1 className="text-3xl">Bachelor of Science</h1>
          <h1>in </h1>
          <h1 className="text-2xl">Electronics and Telecommunication Engineering</h1>
          <h1>from</h1>
          <h1 className="text-2xl"> International Islamic University Chittagong</h1>
          <h1>in 2019.</h1>
        </div>
      </div>
    </div>
  );
};

export default Education;
