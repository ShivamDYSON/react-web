import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;

      if (window.scrollY > heroHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isSticky
        ? 'bg-gradient-to-b from-black via-black/10 to-transparent backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
        } text-white`}
    >
      <div
        className={`transform transition-transform duration-500 ease-in-out ${isSticky ? 'scale-105 opacity-100' : 'scale-100 opacity-80'
          }`}
        style={{
          transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.5s ease-in-out',
        }}
      >
        <div className="container py-2 flex justify-between items-center px-8 md:px-16 lg:px-24">
          <div className="text-2xl font-bold italic">
            <img
              src="public/adobe icon.jpg"
              alt="Adobe Icon"
              className="h-10 w-10 md:h-12 md:w-12 object-contain mr-4"
            />
          </div>
          <div className="hidden md:flex space-x-6 font-sans font-medium subpixel-antialiased">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About Me</a>
            <a href="#service" className="hover:text-gray-400">Services</a>
            <a href="#project" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
          <button className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Connect Me
          </button>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="outline-none">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="md:hidden flex flex-col justify-center items-center h-screen bg-black">
          <div className="space-y-6 text-center">
            <a href="#home" className="block text-2xl font-medium text-white hover:text-gray-400">Home</a>
            <a href="#about" className="block text-2xl font-medium text-white hover:text-gray-400">About Me</a>
            <a href="#service" className="block text-2xl font-medium text-white hover:text-gray-400">Services</a>
            <a href="#project" className="block text-2xl font-medium text-white hover:text-gray-400">Projects</a>
            <a href="#contact" className="block text-2xl font-medium text-white hover:text-gray-400">Contact</a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
