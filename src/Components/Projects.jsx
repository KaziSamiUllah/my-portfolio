import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Readopia",
      description: "Library management system with user-friendly features.",
      liveURL: "https://readopia-a11-t008.web.app",
      frontEndGithub: "https://github.com/KaziSamiUllah/A11-Readopia-Client",
      backEndGithub: "https://github.com/KaziSamiUllah/A11-Readopia-Server",
      image: "https://via.placeholder.com/300", // Placeholder image URL
    },
    {
      title: "Study Circle",
      description: "Collaborative learning platform for students.",
      liveURL: "https://study-circle-a12.web.app",
      frontEndGithub: "https://github.com/KaziSamiUllah/StudyCircle-Client",
      backEndGithub: "https://github.com/KaziSamiUllah/A12-StudyCircle-Server",
      image: "https://via.placeholder.com/300", // Placeholder image URL
    },
    {
      title: "Serene Stay Estates",
      description: "A platform to find accommodations including hotels, motels, resorts, vacation rentals, lodges, and guesthouses around the world.",
      liveURL: "https://assignment-9-eeed3.web.app/",
      frontEndGithub: "https://github.com/KaziSamiUllah/A9-Serene-Stay-Estates",
      backEndGithub: "/",
      image: "https://via.placeholder.com/300", // Placeholder image URL
    },
  ];

  return (
    <div
      id="projects"
      className="flex justify-center flex-col items-center min-h-screen py-10"
    >
      <h1 className="text-center my-10 text-3xl">My projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-10/12">
        {projects.map((project, idx) => (
          <div key={idx} className="border p-4 rounded-lg shadow-lg ">
            <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
            <p className="mb-2">{project.description}</p>
            <iframe
              className="mb-4 w-full "
              src={project.liveURL}
              title={project.title}
              height="300px"
              style={{ border: "none" }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
            <div className="flex justify-between items-center">
              <a
                href={project.liveURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Live Site
              </a>
              <div className="flex gap-4">
                <a
                  href={project.frontEndGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Frontend Code
                </a>
                <a
                  href={project.backEndGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Backend Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
