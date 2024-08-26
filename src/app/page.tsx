"use client";

import Image from "next/image";
import './globals.css';
import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const navHeight = document.querySelector('nav')?.offsetHeight;
    setHeight(`calc(100vh - ${navHeight}px)`);
  }, []);

  return (
    <main className="main">
      <nav className="nav flex justify-between items-center px-6 py-4 bg-white">
        <div className="logo flex items-center cursor-pointer">
          <Image src="/images/stuy-seal.png" alt="Stuyvesant High School Seal" width={50} height={50} />
          <div className="logo-container-text ml-3 flex flex-col justify-center">
            <div id="seniorcaucus" className="p-0 m-0">Senior Caucus</div>
            <div id="t2025" className="p-0 m-0">2025</div>
          </div>
        </div>
        <div className="menu md:flex space-x-6 hidden">
          <a href="#members" className="text-black hover:text-blue-600 inter-bold">Members</a>
          <a href="#announcements" className="text-black hover:text-blue-600 inter-bold">Announcements</a>
          <a href="#events" className="text-black hover:text-blue-600 inter-bold">Events</a>
        </div>
        <div className="sandwich-menu md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu flex flex-col items-center py-4 space-y-4 bg-white shadow-md">
          <a href="#members" className="text-black hover:text-blue-600 inter-bold">Members</a>
          <a href="#announcements" className="text-black hover:text-blue-600 inter-bold">Announcements</a>
          <a href="#events" className="text-black hover:text-blue-600 inter-bold">Events</a>
        </div>
      )}
      <div className="hero h-64 lg:h-96 relative" style={{ height }}>
        <div className="relative w-full h-full flex items-center justify-center lg:justify-start">
          <div className="bridge-container relative w-full lg:w-2/3 h-full">
            <Image 
              src="/images/bridge.png" 
              alt="Tribeca Bridge" 
              layout="fill" 
              objectFit="contain" 
            />
          </div>
          <div className="mb-0">
            <div className="absolute bottom-16 right-4 lg:bottom-16 lg:right-8 text-center lg:text-right">
              <h2 id="" className="text-4xl md:text-6xl lg:text-9xl xl:text-[7.9375rem] text-black inter-semibold">
                Stuyvesant
              </h2>
              <h2 id="" className="text-4xl md:text-6xl lg:text-9xl xl:text-[7.9375rem] text-black inter-extralight">
                Senior Caucus
              </h2>
            </div>
          </div>
          <div className="arrow-down absolute bottom-4 left-1/2 transform -translate-x-1/2 mt-4 flex">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="black" 
              className="w-8 h-8 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}