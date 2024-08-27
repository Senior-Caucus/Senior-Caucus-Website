"use server";


import HomeHero from '@/components/HomeHero';
import RecDefault from "public/images/RecDefault.png";
import Image from 'next/image';
import Link from 'next/link';
import findOutArrow from "public/images/FindOutArrow.svg";
import aboutUsBackground from "public/images/AboutUsBackground.svg";
import aboutUsBackgroundMobile from "public/images/MobileAboutUsBackGround.svg"

export default async function Home() {
  return (
    <div>
      <HomeHero />
      <div className="w-screen h-screen grid-cols-12 grid-rows-12 grid">
        <div className="z-0 m-6 text-8xl sm:row-start-1 sm:text-left inter-extralight col-start-1 row-start-2  col-span-full">
          About Us
        </div>
        <Image src={aboutUsBackgroundMobile} alt="mobile background" className="md:invisible visible col-start-1 ml-3 col-span-full row-start-2 row-span-full" />
        <Image src={aboutUsBackground} className='sm:invisible md:visible z-3 w-full h-full z-2 col-start-2 row-start-1 col-span-11 row-span-11' alt="background for the about us page (large verison)" />
        <Image className="z-2 col-span-11 ml-5 row-start-3 sm:row-start-2 sm:row-span-7 sm:col-span-10 sm:col-start-1 sm:ml-10 md:row-start-3 md:row-span-5 md:col-start-1 md:ml-20 md:col-span-8" src={RecDefault} alt="About us image" />
        <div className="z-1 sm:row-start-6 md:row-start-8 col-start-5 md:row-span-4 col-span-7 text-2xl inter-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>

      {/* Dept. section */}
      <div className='m-6 pr-10 flex-col w-screen h-screen'>
        <div className='inter-extralight text-7xl sm:text-8xl mb-5'>Departments</div>
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
              <Link href="/members" className="hover:scale-105">
                <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6 hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Resources section */}
      <div className='m-6 pr-10 flex-col w-screen h-screen'>
        <div className='inter-extralight text-7xl sm:text-8xl'>Resources</div>
        <div className='flex sm:flex-row flex-col h-full'>
          <div className='flex flex-col justify-center sm:w-[50vw] w-[80vw] pr-6 h-fit pl-5'>
            <div className='inter-extralight text-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Link href="/resources" className="hover:scale-105">
                <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6 hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className='w-[50vw] h-full'>
            <Image className="w-full h-auto" src={RecDefault} alt="Resources image" />
          </div>
        </div>
      </div>

      {/* Events section */}
      <div className='m-6 pr-10 flex-col w-screen h-screen'>
        <div className='inter-extralight text-7xl sm:text-8xl'>Events</div>
        <div className='flex sm:flex-row flex-col-reverse sm:h-full h-fit'>
          <div className='flex flex-col justify-center sm:w-[50vw] w-[80vw] pr-6 h-fit pl-5'>
            <div className='inter-extralight text-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='flex flex-row items-center mt-4'>
            <Link href="/events" className="hover:scale-105">
                <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6 hover:translate-x-1" />
              </Link>            </div>
          </div>
          <div className='w-[50vw] sm:h-full h-fit'>
            <Image className="w-full h-auto" src={RecDefault} alt="Resources image" />
          </div>
        </div>
      </div>

    </div>
  );
}