"use server"
import HomeBattle from "public/images/HomeBattle.png";
import EventsHeroBackgroundLarge from "public/images/EventsHeroBackground.svg"
import Image from "next/image";

export default async function EventsPage() {
    return (<div>
        <div className="grid grid-cols-12 grid-rows-12 h-[calc(100vh-5rem)] w-lvw">
            <Image className="row-start-1 col-start-1 col-span-11 row-span-11 m-3" src={EventsHeroBackgroundLarge} alt="background for events page" />
            <Image className="row-start-2 row-span-10 col-start-3 col-span-9" src={HomeBattle} alt="homecoming picture + battle" />
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
    </div>);
}