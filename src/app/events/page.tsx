"use server"
import HomeBattle from "public/images/HomeBattle.png";
import MobileHomeBattle from "public/images/BattleMobile.png";

import EventsHeroBackgroundLarge from "public/images/EventsHeroBackground.svg"
import Image from "next/image";
import MobileEventsHero from "public/images/MobileEventsHero.svg"

export default async function EventsPage() {
    return (<div>
        <div className="grid grid-cols-12 grid-rows-12 h-[calc(100vh-5rem)] w-lvw">
            <Image className="visible md:invisible row-start-2 col-start-1 col-span-8 row-span-10 sm:row-start-2 sm:col-start-1 sm:col-span-6 sm:row-span-10 m-3" src={MobileEventsHero} alt="background for events page small " />
            <Image className="invisible md:visible row-start-4 col-start-2 col-span-9 row-span-full lg:row-start-1 lg:col-start-1 lg:col-span-11 lg:row-span-11 m-3" src={EventsHeroBackgroundLarge} alt="background for events page" />
            <Image className="visible md:invisible row-start-2 row-span-10 col-start-3 col-span-9 sm:col-start-3 sm:row-start-2 sm:row-span-10 sm:col-span-6  rounded-md" src={MobileHomeBattle} alt="homecoming picture + battle" />
            <Image className="invisible md:visible row-start-2 row-span-10 col-start-2 col-span-11 lg:row-start-2 lg:ow-span-10 lg:col-start-3 lg:col-span-9" src={HomeBattle} alt="homecoming picture + battle" />
            <div className="inter-extralight row-start-10 row-span-2 col-start-1 col-span-1 ml-4 text-9xl italic">
                Events
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

        <div className="w-screen min-h-[50vh]"></div>
    </div>);
}