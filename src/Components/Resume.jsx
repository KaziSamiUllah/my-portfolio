import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="flex justify-center items-center min-h-screen ">
      <div className="w-10/12 h-[80vh]">
        <iframe
          src="https://drive.google.com/file/d/1CDAGUBkUHFr_DKBKaQYuM_wSfvjgWKZz/preview"
          height="100%"
          width="100%"
          frameborder="0"
        ></iframe>
        <div className="m-5 flex justify-center">
        <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
          {" "}
          <a href="https://drive.usercontent.google.com/u/0/uc?id=1CDAGUBkUHFr_DKBKaQYuM_wSfvjgWKZz&export=download">
            Download Resume
          </a>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
