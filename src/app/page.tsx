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

      {/* Dept. section */}
      <div className='m-6 pr-10 flex-col w-screen h-screen'>
        <div className='inter-extralight text-7xl sm:text-8xl'>Departments</div>
        <div className='flex sm:flex-row flex-col h-full'>
          <div className='grid grid-cols-2 grid-rows-2 gap-1 sm:w-[50vw] w-[80vw] h-fit'>
            <Image className="w-full h-auto" src={RecDefault} alt="dept image 1" />
            <Image className="w-full h-auto" src={RecDefault} alt="dept image 2" />
            <Image className="w-full h-auto" src={RecDefault} alt="dept image 3" />
            <Image className="w-full h-auto" src={RecDefault} alt="dept image 4" />
          </div>
          <div className='flex flex-col justify-center sm:w-[50vw] w-[80vw] sm:m-0 m-[-30px] pl-6 h-fit'>
            <div className='inter-extralight text-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='flex flex-row items-center mt-4'>
              <div className='underline underline-offset-1 cursor-pointer'>Check out more</div>
              <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}