"use server"
import Image from "next/image"
import TheTeamHeroBackground from "public/images/TheTeamHeroBackground.svg";
import HomecomingImage from "public/images/Homecoming.png";
import GloriousLeaders from "public/images/GloriousLeaders.png"
import MobileTeamHeroBackground from "public/images/TeamHeroMobileBackground.svg";

import LeadershipBackgroundLarge from "public/images/LeadershipLargeBackground.svg";
import PersonBox from "@/components/PersonBox";
import DogeBoy from "public/images/DogeBoy.png";
import Link from "next/link";
import findOutArrow from "public/images/FindOutArrow.svg";


export default async function MemberPage() {
    return (<div>
        <div className="w-full grid grid-cols-12 grid-rows-12 h-[calc(100vh-5rem)]">
            <Image className="overflow-hidden ml-0 overflow-x-auto row-start-3 col-start-1 row-span-full col-span-full lg:col-start-1 lg:mt-4 md:col-span-9 lg:row-start-1 lg:overflow-x-auto lg:row-span-11" src={HomecomingImage} alt="Junior Caucus' events during homecoming" />
            <div className="text-6xl col-start-3 row-start-10 row-span-1 col-span-1 lg:col-start-9 mt-10 ml-20 italic">The</div>
            <div className="text-9xl inter-extralight col-start-3 lg:col-start-9 mr-6 row-start-11 italic">Team</div>
            <Image className="invisible lg:visible ml-10 col-start-10 row-start-4 col-span-full row-span-full" src={GloriousLeaders} alt="The glorious leaders of Senior Caucus" />
            <Image className="invisible lg:visible md:row-start-3 col-start-1 lg:row-start-1 col-span-full row-span-full m-5" src={TheTeamHeroBackground} alt="background for the team hero large" />
            <Image className="visible md:visible lg:invisible col-start-1 row-start-1 row-span-full col-span-full ml-4" src={MobileTeamHeroBackground} alt="mobile background" />
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
        <div className="h-10" />
        <div className="min-h-[50vh] w-screen">
            {/* leadership section (head honchos) */}
            <div className="w-screen h-screen grid grid-col-12 grid-rows-12">
                <div className="row-start-1 row-span-1 col-start-1 col-span-full flex justify-center text-9xl inter-extralight">
                    Leadership
                </div>
                <div className="row-start-2 row-span-full col-start-1 col-span-full mt-20 grid grid-cols-2 grid-rows-2">
                    <Image className="row-start-1 col-start-1 col-span-full row-start-full" src={LeadershipBackgroundLarge} alt="big background leaderhip" />
                    <PersonBox
                        className="col-start-1 col-span-1 row-start-1 row-span-1"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <PersonBox
                        className="col-start-2 col-span-1 row-start-1 row-span-1"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <PersonBox
                        className="col-start-1 col-span-1 row-start-2 row-span-1"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <PersonBox
                        className="col-start-2 col-span-1 row-start-2 row-span-1"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </div>
            </div>
            <div className="flex justify-center text-9xl inter-extralight">
                Departments
            </div>

            {/* Events */}
            <div className="grid grid-cols-12 grid-rows-12 w-screen h-[60vh]">
                <div className="italic text-8xl ml-3 col-start-1 row-start-1 col-span-full row-span-1">
                    Events
                </div>
                <div className="text-1xl inter-extralight row-start-3 col-start-1 col-span-9 row-span-1 ml-3 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="col-start-1 row-start-5 grid grid-cols-2 grid-rows-1 w-screen h-auto -mt-4 -ml-1">
                    <PersonBox
                        className="-ml-11"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <PersonBox
                        className="-ml-10"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </div>
                <div className="row-start-10 col-start-1 col-span-full row-span-1 bold ml-3 mt-6 transition-transform hover:translate-x-1">
                    <Link href="/members/events" className="">
                        <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                        <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6" />
                    </Link>
                </div>
            </div>

            {/* graphics */}
            <div className="grid grid-cols-12 grid-rows-12 w-screen h-[60vh]">
                <div className="italic text-8xl ml-3 col-start-1 row-start-1 col-span-full row-span-1">
                    Graphics
                </div>
                <div className="text-1xl inter-extralight row-start-3 col-start-1 col-span-9 row-span-1 ml-3 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="col-start-1 row-start-5 grid grid-cols-2 grid-rows-1 w-screen h-auto -mt-4 -ml-1">
                    <PersonBox
                        className="-ml-11"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <PersonBox
                        className="-ml-10"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </div>
                <div className="row-start-10 col-start-1 col-span-full row-span-1 bold ml-3 mt-6 transition-transform hover:translate-x-1">
                    <Link href="/members/graphics" className="">
                        <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                        <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6" />
                    </Link>
                </div>
            </div>
            {/* --- */}

            {/* internals */}
            <div className="grid grid-cols-12 grid-rows-12 w-screen h-[60vh]">
                <div className="italic text-8xl ml-3 col-start-1 row-start-1 col-span-full row-span-1">
                    Internals
                </div>
                <div className="text-1xl inter-extralight row-start-3 col-start-1 col-span-9 row-span-1 ml-3 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="col-start-1 row-start-5 grid grid-cols-2 grid-rows-1 w-screen h-auto -mt-4 -ml-1">
                    <PersonBox
                        className="-ml-11"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <PersonBox
                        className="-ml-10"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </div>
                <div className="row-start-10 col-start-1 col-span-full row-span-1 bold ml-3 mt-6 transition-transform hover:translate-x-1">
                    <Link href="/members/internals" className="">
                        <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                        <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6" />
                    </Link>
                </div>
            </div>

            {/* externals */}
            <div className="grid grid-cols-12 grid-rows-12 w-screen h-[60vh]">
                <div className="italic text-8xl ml-3 col-start-1 row-start-1 col-span-full row-span-1">
                    Externals
                </div>
                <div className="text-1xl inter-extralight row-start-3 col-start-1 col-span-9 row-span-1 ml-3 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="col-start-1 row-start-5 grid grid-cols-2 grid-rows-1 w-screen h-auto -mt-4 -ml-1">
                    <PersonBox
                        className="-ml-11"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <PersonBox
                        className="-ml-10"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </div>
                <div className="row-start-10 col-start-1 col-span-full row-span-1 bold ml-3 mt-6 transition-transform hover:translate-x-1">
                    <Link href="/members/externals" className="">
                        <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                        <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6" />
                    </Link>
                </div>
            </div>

            {/* I/T */}
            <div className="grid grid-cols-12 grid-rows-12 w-screen h-[60vh]">
                <div className="italic text-8xl ml-3 col-start-1 row-start-1 col-span-full row-span-1">
                    I/T
                </div>
                <div className="text-1xl inter-extralight row-start-3 col-start-1 col-span-9 row-span-1 ml-3 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="col-start-1 row-start-5 grid grid-cols-2 grid-rows-1 w-screen h-auto -mt-4 -ml-1">
                    <PersonBox
                        className="-ml-11"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <PersonBox
                        className="-ml-10"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </div>
                <div className="row-start-10 col-start-1 col-span-full row-span-1 bold ml-3 mt-6 transition-transform hover:translate-x-1">
                    <Link href="/members/it" className="">
                        <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                        <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6" />
                    </Link>
                </div>
            </div>

            {/* social media */}
            <div className="grid grid-cols-12 grid-rows-12 w-screen h-[60vh]">
                <div className="italic text-8xl ml-3 col-start-1 row-start-1 col-span-full row-span-1">
                    Social Media
                </div>
                <div className="text-1xl inter-extralight row-start-3 col-start-1 col-span-9 row-span-1 ml-3 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="col-start-1 row-start-5 grid grid-cols-2 grid-rows-1 w-screen h-auto -mt-4 -ml-1">
                    <PersonBox
                        className="-ml-11"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <PersonBox
                        className="-ml-10"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </div>
                <div className="row-start-10 col-start-1 col-span-full row-span-1 bold ml-3 mt-6 transition-transform hover:translate-x-1">
                    <Link href="/members/socialmedia" className="">
                        <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                        <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6" />
                    </Link>
                </div>
            </div>
            {/* media */}
            <div className="grid grid-cols-12 grid-rows-12 w-screen h-[60vh]">
                <div className="italic text-8xl ml-3 col-start-1 row-start-1 col-span-full row-span-1">
                    Media
                </div>
                <div className="text-1xl inter-extralight row-start-3 col-start-1 col-span-9 row-span-1 ml-3 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="col-start-1 row-start-5 grid grid-cols-2 grid-rows-1 w-screen h-auto -mt-4 -ml-1">
                    <PersonBox
                        className="-ml-11"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <PersonBox
                        className="-ml-10"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </div>
                <div className="row-start-10 col-start-1 col-span-full row-span-1 bold ml-3 mt-6 transition-transform hover:translate-x-1">
                    <Link href="/members/media" className="">
                        <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                        <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6" />
                    </Link>
                </div>
            </div>
        </div>
    </div>)
}