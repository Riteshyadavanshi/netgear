 "use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="flex items-center justify-between p-3 bg-[#e8e8e5] mx-5 md:mx-40 rounded-b-md mb-4">
      <div className="text-xl font-bold">Netgear Company</div>

    
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? (
         
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        
      </div>

    
      <div
        className={`w-full hidden md:w-auto md:flex items-center space-y-4 md:space-y-0 text-center mt-5 md:mt-0 `}
      >
        <a href="#home" className="block md:inline-block hover:text-blue-500 px-3 py-2 transition duration-300">Home</a>
        <a href="#services" className="block md:inline-block hover:text-blue-500 px-3 py-2 transition duration-300">Services</a>
        <a href="#aboutus" className="block md:inline-block hover:text-blue-500 px-3 py-2 transition duration-300">About us</a>
      </div>
    </nav>
   {isOpen&&<div
        className={`w-full  md:w-auto md:flex items-center space-y-4 md:space-y-0 text-center mt-5 md:mt-0 `}
      >
        <a href="#home" className="block md:inline-block hover:text-blue-500 px-3 py-2 transition duration-300">Home</a>
        <a href="#services" className="block md:inline-block hover:text-blue-500 px-3 py-2 transition duration-300">Services</a>
        <a href="#aboutus" className="block md:inline-block hover:text-blue-500 px-3 py-2 transition duration-300">About us</a>
      </div>}
    </>
    
  );
}
