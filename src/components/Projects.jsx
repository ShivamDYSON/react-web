import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";

// Fireflies CSS
const firefliesStyle = `
html, body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

@keyframes move {
  0% { transform: translateX(0) translateY(0) scale(1); }
  100% { transform: translateX(50px) translateY(-50px) scale(1.2); }
}

@keyframes fade {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.firefly {
  position: absolute;
  background: rgba(255, 255, 100, 0.8);
  border-radius: 50%;
  width: 8px;
  height: 8px;
  opacity: 0;
  box-shadow: 0 0 6px 3px rgba(255, 255, 100, 0.6);
  animation: move 4s linear infinite, fade 4s ease-in-out infinite;
}

.firefly:nth-child(odd) {
  animation-duration: 5s;
}

.firefly:nth-child(even) {
  animation-duration: 6s;
}

.firefly:nth-child(3n) {
  animation-duration: 7s;
}
`;

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack",
    image: bookMSImage,
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/YouafKhan1",
  },
];

const Projects = () => {
  return (
    <div className="relative text-white py-20 bg-black overflow-hidden" id="project">
      {/* Fireflies */}
      <style>{firefliesStyle}</style>
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ width: "100%", height: "100%" }}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="firefly"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              transform: `translate(${Math.random() * -50}px, ${Math.random() * -50}px)`,
            }}
          ></div>
        ))}
      </div>

      {/* Projects content */}
      <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
