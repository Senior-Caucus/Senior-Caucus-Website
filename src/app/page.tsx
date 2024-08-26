"use server";


import HomeHero from '@/components/HomeHero';
import RecDefault from "public/images/RecDefault.png";
import Image from 'next/image';

export default async function Home() {
  return (
    <div>
      <HomeHero />
      <div className="w-screen h-screen grid-cols-12 grid-rows-12 grid">
      <div className="z-0 m-6 text-7xl sm:text-8xl text-center sm:text-left inter-extralight col-start-1 row-start-2 sm:row-start-1 col-span-full">
          About Us
        </div>
        <Image className="z-1 row-start-3 row-span-5 col-start-1 ml-20 col-span-6 " src={RecDefault} alt="About us image" />
        <div className="z-0 row-start-5 sm:row-start-8 col-start-5 row-span-4 col-span-7 text-2xl inter-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>
    </div>
  );
}