import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative overflow-hidden">
      <style>
        {`
          @keyframes moveStars {
            from { transform: translateX(0); }
            to { transform: translateX(-2000px); }
          }

          .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 4000px;
            height: 100%;
            background: transparent;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
            animation: moveStars 100s linear infinite;
          }

          .star {
            width: 2px;
            height: 2px;
            background: white;
            position: absolute;
            opacity: 0.8;
            animation: moveStars 100s linear infinite;
          }
        `}
      </style>

      <div className="stars">
        {Array.from({ length: 500 }).map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${50 + Math.random() * 50}s`,
              animationDelay: `${Math.random() * 100}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="text-2xl font-bold italic">
              <img
                src="public/adobe icon.jpg"
                alt="Adobe Icon"
                className="h-10 w-10 md:h-12 md:w-12 object-contain mr-4"
              />
            </div>
            <p className="text-gray-400">
              Full-Stack Developer based in the USA, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Yousaf. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
