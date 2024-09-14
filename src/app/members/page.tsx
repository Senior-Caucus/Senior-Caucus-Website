"use server"
import Image from "next/image"
import TheTeamHeroBackground from "public/images/TheTeamHeroBackground.svg";
import HomecomingImage from "public/images/Homecoming.png";
import GloriousLeaders from "public/images/GloriousLeaders.png"
import MobileTeamHeroBackground from "public/images/TeamHeroMobileBackground.svg";

import LeadershipBackgroundLarge from "public/images/LeadershipLargeBackground.svg";
import PersonBox from "@/components/PersonBox";
import DogeBoy from "public/images/DogeBoy.png";

import DepartmentSection from "@/components/DepartmentSection";

import DepartmentBackgrounds from "public/images/DepartmentBackgrounds.svg";

import JosephineYoo from "public/images/JosephineYoo.png"
import JohnJay from "public/images/JohnJay.png";

import SkyeMcArthur from "public/images/SkyeMcArthur.png";
import EmilyLi from "public/images/EmilyLi.png";

import ChenmingFang from "public/images/ChenmingFang.png";

import JosephineGunawan from "public/images/JosephineGunawan.png";

import EliasXu from "public/images/EliasXu.png";
import OtzarJaffe from "public/images/OtzarJaffe.png";


import ChloeWong from "public/images/ChloeWong.png";


import MaeganDiep from "public/images/MaeganDiep.png";
import RayenZhou from "public/images/RayenZhou.png";
import SuhanaKumar from "public/images/SuhanaKumar.png"
import VitaKirschtein from "public/images/VitaKirschtein.png"

export default async function MemberPage() {

    return (<div>
        <div className="w-full grid grid-cols-12 grid-rows-12 h-[calc(100vh-5rem)]">
            <Image className="overflow-hidden ml-0 overflow-x-auto row-start-3 col-start-1 row-span-full col-span-full lg:col-start-1 lg:mt-4 md:col-span-9 lg:row-start-1 lg:overflow-x-auto lg:row-span-11" src={HomecomingImage} alt="Junior Caucus' events during homecoming" />
            <div className="text-6xl col-start-3 row-start-10 row-span-1 col-span-1 lg:col-start-9 mt-10 ml-20 italic">The</div>
            <div className="text-9xl inter-extralight col-start-3 lg:col-start-9 mr-6 row-start-11 italic">Team</div>
            <Image className="invisible lg:visible ml-10 col-start-10 row-start-4 col-span-full row-span-full" src={GloriousLeaders} alt="The glorious leaders of Senior Caucus" />
            <Image className="select-none pointer-events-none invisible lg:visible md:row-start-3 col-start-1 lg:row-start-1 col-span-full row-span-full m-5" src={TheTeamHeroBackground} alt="background for the team hero large" />
            <Image className="select-none pointer-events-none visible md:visible lg:invisible col-start-1 row-start-1 row-span-full col-span-full ml-4" src={MobileTeamHeroBackground} alt="mobile background" />
            <div className="arrow-down absolute bottom-4 left-1/2 transform -translate-x-1/2 mt-4 flex">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="black"
                    className="w-8 h-8 animate-bounce hover:animate-none hover:scale-x-110 hover:h-10 hover:w-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
        <div className="h-10" />
        <div className="min-h-[50vh] w-screen">
            {/* leadership section (head honchos) */}
            <div className="w-screen h-10" />

            <div className="w-screen h-[140vh] md:h-screen grid grid-col-12 grid-rows-12">
                <div className="row-start-1 row-span-1 col-start-1 col-span-full flex justify-center text-7xl md:text-9xl inter-extralight">
                    Leadership
                </div>
                <div className="w-screen h-10" />
                <div className="row-start-1 gap-7 md:gap-0 md:row-start-2 row-span-full col-start-1 col-span-full mt-20 grid grid-col-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
                    <Image className="row-start-1 col-start-1 col-span-full row-start-full" src={LeadershipBackgroundLarge} alt="big background leaderhip" />
                    <PersonBox
                        className="col-start-1 col-span-1 row-start-1 row-span-1"
                        name="Josephine Yoo"
                        position="Co-President"
                        image={JosephineYoo}
                        description="Hey guys! I’m Josephine, and I’m super excited to be Senior Caucus Co-President alongside Grace this year. I love to try new coffees, read, and go on runs in my free time. I look forward to working with everyone to make our last year as fun and memorable as possible!"
                    />
                    <PersonBox
                        className="col-start-1 col-span-1 row-start-2 row-span-1 md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-1"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <PersonBox
                        className="col-start-1 col-span-1 row-start-3 row-span-1 md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1"
                        name="John Jay Wang"
                        position="Chief of Staff"
                        image={JohnJay}
                        description="Hi! My name is John Jay Wang, and I am serving as your Chief of Staff. In school, you can find me on the tennis courts, music room, and SU room, but out of school, you can find me listening to music, going on runs, and playing my instruments. Super excited for an amazing senior year!"
                    />
                    <PersonBox
                        className="col-start-1 col-span-1 row-start-4 row-span-1 md:col-start-2 md:col-span-1 md:row-start-2 md:row-span-1"
                        name="Doge Dogecoin"
                        position="Co-President"
                        image={DogeBoy}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </div>
            </div>
            <div className="flex justify-center text-7xl md:text-9xl inter-extralight">
                Departments
            </div>
            <div className="w-screen h-10" />
            {/* Events */}
            <div className="grid-cols-1 grid-rows-7 grid">
                <Image className="col-start-1 col-span-1 row-start-1 row-span-full" src={DepartmentBackgrounds} alt="department backgrounds" />
                <DepartmentSection
                    className="col-start-1 col-span-1 row-start-1 row-span-1"
                    departmentName="Events"
                    departmentLink="events"
                    departmentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    director1info={
                        {
                            directorName: "Emily Li",
                            position: "Events Director",
                            image: EmilyLi,
                            description: "Hi, my name is Emily. I’m very excited to be one of your events co-director once again! I love planning events, cafe-hopping, eating out and discovering new artists."
                        }
                    }
                    director2info={
                        {
                            directorName: "Skye McArthur",
                            position: "Events Director",
                            image: SkyeMcArthur,
                            description: "Hi, I am Skye, and I'm so excited to be Co-Director of Events with Emily. I was a member of the committee last year, and I'm excited to take on more responsibility this year and help plan some more amazing events, including our senior prom."
                        }
                    }
                />

                {/* graphics */}
                <DepartmentSection
                    className="col-start-1 col-span-1 row-start-2 row-span-1"
                    departmentName="Graphics"
                    departmentLink="graphics"
                    departmentDescription="The Graphics Department’s primary goal is to create engaging and accessible social media posts that promote the Caucus’s events, fundraisers, and resources to the student body. Its scope, however, extends beyond this, and any and all project ideas are welcomed."
                    director1info={
                        {
                            directorName: "Chloe Wong",
                            position: "Graphics Director",
                            image: ChloeWong,
                            description: "Hello! My name is Chloe, and I'm so excited to be your caucus graphics director for one more year. I hope that my work proves itself worthy of your precious Instagram likes."
                        }
                    }
                    director2info={
                        null
                    }
                />

                {/* internals */}
                <DepartmentSection
                    className="col-start-1 col-span-1 row-start-3 row-span-1"
                    departmentName="Internals"
                    departmentLink="internals"
                    departmentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    director1info={
                        {
                            directorName: "Josephine Gunawan",
                            position: "Internals Director",
                            image: JosephineGunawan,
                            description: "Hi, I'm Josephine, and I am so excited to be one of your Internals Directors this year! I love literature and history, but when I have free time, my favorite thing to do is bake pecan pie tarts. I am also the SU Director of External Affairs!"
                        }
                    }
                    director2info={
                        null
                    }
                />


                {/* externals */}
                <DepartmentSection
                    className="col-start-1 col-span-1 row-start-4 row-span-1"
                    departmentName="Externals"
                    departmentLink="externals"
                    departmentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    director1info={
                        {
                            directorName: "Chenming Fang",
                            position: "Externals Director",
                            image: ChenmingFang,
                            description: "Hi, I'm Chenming. I love running, gaming, and listening to English and Chinese music. I am excited to lead the Internals Department again this year! We know college application is stressful, and our team is here to make this process easier for everyone."
                        }
                    }
                    director2info={
                        null
                    }
                />

                {/* I/T */}
                <DepartmentSection
                    className="col-start-1 col-span-1 row-start-5 row-span-1"
                    departmentName="I/T"
                    departmentLink="it"
                    departmentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    director1info={
                        {
                            directorName: "Elias Xu",
                            position: "I/T Director",
                            image: EliasXu,
                            description: "Hello, my name is Elias! I'm a CS, boardgaming, beekeeping type of person :), and I can't wait to help run Caucus this year with my codirector Otzar."
                        }
                    }
                    director2info={
                        {
                            directorName: "Otzar Jaffe",
                            position: "I/T Director",
                            image: OtzarJaffe,
                            description: "Hi, I’m Otzar. I’m excited to be your I/T director this year! Right now, I’m interning at an AI security company where I help them train models. I also love baking banana bread, playing basketball, and reading books."
                        }
                    }
                />

                {/* social media */}
                <DepartmentSection
                    className="col-start-1 col-span-1 row-start-6 row-span-1"
                    departmentName="Social Media"
                    departmentLink="socialmedia"
                    departmentDescription="Senior Caucus' Social Media department is responsible for running the Instagram, TikTok, and any other forms of promotion/representation. Look forward to some of our projects this year, such as our Senior Superlatives Spotlight and the StuyGrad page!"
                    director1info={
                        {
                            directorName: "Maegan Diep",
                            position: "Social Media Director",
                            image: MaeganDiep,
                            description: ""
                        }
                    }
                    director2info={
                        null
                    }
                />

                {/* media */}
                <DepartmentSection
                    className="col-start-1 col-span-1 row-start-7 row-span-1"
                    departmentName="Media"
                    departmentLink="media"
                    departmentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    director1info={
                        {
                            directorName: "Vita Kirschtein",
                            position: "Media Director",
                            image: VitaKirschtein,
                            description: "Hi, I'm Vita, and I'm excited to be part of the cabinet this year, and to be documenting our experiences!"
                        }
                    }
                    director2info={
                        null
                    }
                />

                {/* media */}
                <DepartmentSection
                    className="col-start-1 col-span-1 row-start-8 row-span-1"
                    departmentName="Finance"
                    departmentLink="Finance"
                    departmentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    director1info={
                        {
                            directorName: "Suhana Kumar",
                            position: "Finance Director",
                            image: SuhanaKumar,
                            description: "Hi! I'm Suhana and I love Oreos, sewing and the summer season. I enjoy playing chess and being organized :) I'm super excited for the upcoming year!"
                        }
                    }
                    director2info={{
                        directorName: "Rayen Zhou",
                        position: "Finance Director",
                        image: RayenZhou,
                        description: "Rayen is eager to tackle the year ahead as Chief Financial Officer for the Senior Caucus. Having been in the Student Union for three years, he is excited to be apart of the Senior Caucus and hopes to make it as rewarding and impactful as possible."
                    }
                    }
                />
            </div>
        </div>
    </div>)
}