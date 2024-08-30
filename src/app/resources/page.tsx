import ResourceLeftBackgroundLarge from "public/images/ResourceBackgroundLeft1.svg"
import ResourceRightBackgroundLarge from "public/images/ResourceBackgroundRightLarge.svg"
import Image from "next/image";
import Image1Left from "public/images/ResourceImageLeft1.png";
import Image2Left from "public/images/ResourceImageLeft2.png";
import Image1Right from "public/images/ResourceImageRight1.png";
import Image2Right from "public/images/ResourceImageRight2.png";
import MobileResourceHero from "public/images/MobileResourceHero.svg";
import Doge from "public/images/DogeBoy.png"

export default function ResourcesPage() {
    return (<div>
        <div className="grid grid-cols-12 grid-rows-12 h-[calc(100vh-5rem)] w-lvw overflow-hidden">
            <Image className="visible md:invisible col-start-1 row-start-1 col-span-full row-span-full m-4 " src={MobileResourceHero} alt="mobile resource background" />
            <Image className="invisible md:visible col-start-1 row-start-1 col-span-6 row-span-full m-4" src={ResourceLeftBackgroundLarge} alt="background image for resources page (large)" />
            <Image className="invisible md:visible col-start-9 row-start-1 col-span-full row-span-4 ml-12" src={ResourceRightBackgroundLarge} alt="background for resource image large" />
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
            <Image className="col-start-5 row-start-2 col-span-8 row-span-10 sm:col-start-7 sm:row-start-2 sm:col-span-5 sm:row-span-7 md:col-start-9 md:row-start-3 md:col-span-3 md:row-span-5 mr-4" src={Image1Right} alt="rightmost image for the resources page" />
            <Image className="col-start-4 row-start-6 col-span-8 row-span-4 sm:col-start-8 sm:row-start-6 sm:col-span-5 sm:row-span-4 md:col-start-7 md:row-start-6 md:col-span-3 md:row-span-4" src={Image2Right} alt="leftmost rightward image for the resource page" />
            <Image className="col-start-1 row-start-1 col-span-7 row-span-8 sm:col-start-2 sm:row-start-1 sm:col-span-6 sm:row-span-7 md:col-start-4 md:row-start-2 md:col-span-4 md:row-span-5" src={Image2Left} alt="nearest right leftmost image for resource page" />
            <Image className="col-start-1 row-start-8 col-span-8 row-span-9 sm:col-start-3 sm:row-start-5 sm:col-span-6 sm:row-span-7 md:col-start-2 md:row-start-3 md:col-span-4 md:row-span-5" src={Image1Left} alt="leftmost image for resources page" />
            <div className="inter-extralight row-start-10 col-start-1 md:col-start-2 lg:col-start-5 xl:col-start-6 row-span-full col-span-full text-6xl sm:text-8xl md:text-9xl mt-2  ml-4 md:ml-10 italic">
                Resources
            </div>
        </div>
        <div className="w-screen h-screen">

        </div>
    </div>);
}