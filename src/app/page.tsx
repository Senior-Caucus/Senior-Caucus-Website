"use server";

import Image from "next/image";
import './globals.css';
import Bridge from "public/images/bridge.png"


export default async function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-[calc(100vh-5rem)] w-lvw">
      {/* TODO FIX STYLING */}
      <Image
        className="row-start-2 row-end-8 col-start-3"
        src={Bridge}
        alt="Tribeca Bridge"
      />
      <div className="">

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
  );
}