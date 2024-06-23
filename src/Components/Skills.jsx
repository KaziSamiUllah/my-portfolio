"use client"
import Image from "next/image";
import React from "react";


const Skills = () => {
  const skills = [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Next.js",
        icon: "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png",
      },
    {
      name: "Tailwind CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    },
    {
      name: "JavaScript (ES6+)",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Git version control",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "API",
      icon: "https://cdn-icons-png.flaticon.com/512/126/126473.png",
    }, // Example icon
    {
      name: "JWT",
      icon: "https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png",
    },
    {
      name: "Axios",
      icon: "https://avatars.githubusercontent.com/u/32372333?s=200&v=4",
    }, // Example icon
    {
      name: "Tanstack Query",
      icon: "https://avatars.githubusercontent.com/u/70711355?s=200&v=4",
    }, // Example icon
    {
      name: "Stripe",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
    }
   // Example icon
  ];



  return (
    <div
      id="skills"
      className="text-center px-20 min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-center my-10 text-3xl">My Skills</h1>
      <div className="grid grid-cols-4 gap-10">
        {skills.map((skill, idx) => (
          <div className="border-2 w-32 text-center h-32" key={idx}>
            <Image
            className="mx-auto h-3/5"
              height="50"
              width="50"
              src={skill.icon}
              alt={skill.name}
            ></Image>

            <h1>{skill.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
