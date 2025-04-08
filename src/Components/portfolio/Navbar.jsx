import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu items */}
        <ul className={`md:flex space-x-6 md:space-y-0 md:static absolute left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 top-16 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <li><a href="#home" className="block py-2 md:py-0 hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="block py-2 md:py-0 hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="block py-2 md:py-0 hover:text-gray-400">Projects</a></li>
          <li><a href="#skills" className="block py-2 md:py-0 hover:text-gray-400">Skills</a></li>
          <li><a href="#contact" className="block py-2 md:py-0 hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
