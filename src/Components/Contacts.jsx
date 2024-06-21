import React from "react";

const Contacts = () => {
  return (
    <div id="contact">
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center text-gray-900">
            Contact Information
          </h1>
          <div className="space-y-4 text-gray-800">
            <p>
              <strong>Location:</strong> Chittagong, Bangladesh
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+8801767941060" className="text-blue-500">
                +8801767941060
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:samiullahsagor@outlook.com"
                className="text-blue-500"
              >
                samiullahsagor@outlook.com
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/KaziSamiUllah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                github.com/KaziSamiUllah
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/kazi-sami-ullah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                linkedin.com/in/kazi-sami-ullah
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
