"use server"

import Image from "next/image";
import Bridge from "public/images/bridge.png"
import BridgeBackground from "public/images/BridgeBackground.svg";

export default async function HomeHero() {
    return (
        <>
            <div className="grid grid-cols-12 grid-rows-12 h-[calc(100vh-5rem)] w-lvw">
                <Image className="select-none pointer-events-none col-start-1 col-span-full row-start-4 md:col-start-1 md:col-span-11 md:row-start-3 lg:row-start-1 lg:row-span-7 lg:col-start-2 lg:col-span-7 w-full h-aut " src={BridgeBackground} alt="Bridge Background" />
                <Image
                    className="select-none pointer-events-none opacity-75  brightness-90 col-start-1 col-span-full row-start-3 md:col-start-1 md:col-span-10 lg:row-start-1 lg:row-span-7 lg:col-start-2 lg:col-span-7 w-full h-aut "
                    src={Bridge}
                    alt="Tribeca Bridge"
                />
                <div className="">
                    <div className="mb-0">
                        <div className="absolute bottom-16 right-4 lg:bottom-16 lg:right-8 text-center">
                            <h2 className="drop-shadow-lg text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[7.9375rem] text-black inter-semibold text-right">
                                Stuyvesant
                            </h2>
                            <h2 className="drop-shadow-lg text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[7.9375rem] text-black inter-extralight text-right">
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
            </div></>
    );
}