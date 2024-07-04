import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Study Circle",
      description: "Collaborative learning platform for students.",
      feature1:
        "A student can book study sessions by making payments through Stripe. Free sessions are not required to pay.",
      feature2:
        "In the detailed view of a session in booked sessions a student can rate the session in stars and post a review.",
      feature3:
        "An admin can approve or reject sessions created by tutors. they can post a reason when rejecting and put a price on the sessions when approving.",
      madeWith: "React.js, JavaScript, TailwindCSS, Firebase, MongoDB, Stripe.",
      liveURL: "https://study-circle-a12.web.app",
      frontEndGithub: "https://github.com/KaziSamiUllah/StudyCircle-Client",
      backEndGithub: "https://github.com/KaziSamiUllah/A12-StudyCircle-Server",
      image: "https://via.placeholder.com/300", // Placeholder image URL
    },
    {
      title: "Readopia",
      description: "The premier school library website 9.59 Minute School Library for managing book collection effortlessly.",
      feature1:
        "Borrow books with ease by simply clicking the borrow button. Keep track of your borrowed items in your personal account for easy management.",
      feature2:
        "Librarian users have access to exclusive tools, including updating book information, adding new books to the collection, and managing stock levels seamlessly.",
      feature3:
        "Enjoy a seamless browsing experience across all devices with our fully responsive design, making it easy to navigate the library's collection and services from desktops, tablets, or smartphones.",
      madeWith: "React.js, JavaScript, TailwindCSS, Firebase, MongoDB",
      liveURL: "https://readopia-a11-t008.web.app",
      frontEndGithub: "https://github.com/KaziSamiUllah/A11-Readopia-Client",
      backEndGithub: "https://github.com/KaziSamiUllah/A11-Readopia-Server",
      image: "https://via.placeholder.com/300", // Placeholder image URL
    },
    {
      title: "Serene Stay Estates",
      description:
        "A platform to find accommodations including hotels, motels, resorts, vacation rentals, lodges, and guesthouses around the world.",
      feature1:
        " Enjoy a seamless browsing experience across all devices, whether you're using a desktop, tablet, or mobile phone.",
      feature2:
        "Experience dynamic page titles and engaging interactions that make navigating the site intuitive and enjoyable.",
      feature3:
        "Delightful animations powered by AOS, Animate.css, and React-leaflet enhance the user experience and bring listings to life.",
        
      madeWith: "React.js, JavaScript, TailwindCSS, Firebase, MongoDB",
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
            <h1 className="my-2 font-bold">Made With: {project.madeWith}</h1>
            <div>
              <h1 className="font-bold text-xl my-2">Features:</h1>
              <ol className="space-y-4">
                <li>{project.feature1}</li>
                <li>{project.feature2}</li>
                <li>{project.feature3}</li>
              </ol>
              <div>
                <h1></h1>
              </div>
            </div>
            <iframe
              className="my-4 w-full "
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
