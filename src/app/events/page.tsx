"use server"
import HomeBattle from "public/images/HomeBattle.png";
import MobileHomeBattle from "public/images/BattleMobile.png";

import EventsHeroBackgroundLarge from "public/images/EventsHeroBackground.svg"
import Image from "next/image";
import MobileEventsHero from "public/images/MobileEventsHero.svg"

import { getEvents } from "@/actions/googleSheetsActions";
import Event from "@/components/Event";
import { Suspense } from "react";

export default async function EventsPage() {

    const EventsResp = await getEvents();
    let events: string[][] = [];
    if (EventsResp !== null && EventsResp !== undefined) {
        events = EventsResp;
    }

    return (
        <div>
            <div className="grid grid-cols-12 grid-rows-12 h-[calc(100vh-5rem)] w-lvw">
                <Image className="visible md:invisible row-start-2 col-start-1 col-span-8 row-span-10 sm:row-start-2 sm:col-start-1 sm:col-span-6 sm:row-span-10 m-3" src={MobileEventsHero} alt="background for events page small " />
                <Image className="select-none pointer-events-none invisible md:visible row-start-4 col-start-2 col-span-9 row-span-full lg:row-start-1 lg:col-start-1 lg:col-span-11 lg:row-span-11 m-3" src={EventsHeroBackgroundLarge} alt="background for events page" />
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

            <div className="w-screen min-h-[50vh] h-auto flex flex-row gap-1 flex-wrap justify-center">
                <Suspense fallback={LoadingSpinner()}>
                    <EventsList />
                </Suspense>
            </div>
            <div className="w-screen h-14" />
        </div>
    );
}

async function EventsList() {

    const EventsResp = await getEvents();
    let events: string[][] = [];
    if (EventsResp !== null && EventsResp !== undefined) {
        events = EventsResp;
    }
    return (<>
        {events.map((event, id) => (
            <Event key={id} name={event[0]} className="" description={event[1]} image={event[2]} link={event[3]} date={event[4]} />
        ))}</>);
}

function LoadingSpinner() {
    return (<div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <svg className="w-16 h-16 animate-spin text-gray-900/50" viewBox="0 0 64 64" fill="none"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
            </path>
        </svg>
    </div>)
}