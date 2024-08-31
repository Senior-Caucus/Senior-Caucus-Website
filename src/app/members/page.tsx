"use server"
import Image from "next/image"
import TheTeamHeroBackground from "public/images/TheTeamHeroBackground.svg";
import HomecomingImage from "public/images/Homecoming.png";
import GloriousLeaders from "public/images/GloriousLeaders.png"
import MobileTeamHeroBackground from "public/images/TeamHeroMobileBackground.svg";

import LeadershipBackgroundLarge from "public/images/LeadershipLargeBackground.svg";
import PersonBox from "@/components/PersonBox";
import DogeBoy from "public/images/DogeBoy.png";

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
                <div className="row-start-1 row-span-1 col-start-1 col-span-full flex justify-center text-8xl inter-extralight">
                    Leadership
                </div>
                <div className="row-start-2 row-span-full col-start-1 col-span-full mt-10 grid grid-cols-2 grid-rows-2">
                    <Image className="row-start-1 col-start-1 col-span-full row-start-full" src={LeadershipBackgroundLarge} alt="big background leaderhip"/>
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
            <div className="flex justify-center text-8xl inter-extralight">
                Departments
            </div>
        </div>
    </div>)
}