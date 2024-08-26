"use client";

import Image from "next/image";
import './globals.css';
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="main">
      <nav className="nav flex justify-between items-center px-6 py-4 bg-white">
        <div className="logo flex items-center">
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
      <div className="hero">
        <div className="bridge">
          
        </div>
      </div>
    </main>
  );
}