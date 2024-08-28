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
        <div className="grid grid-cols-12 grid-rows-12 h-[calc(100vh-5rem)] w-lvw">
            <div className="inter-extralight row-start-10 col-start-6 row-span-full col-span-full text-9xl mt-2 ml-10 italic">
                Resources
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
            <Image className="col-start-9 row-start-3 col-span-3 row-span-5 mr-4" src={Image1Right} alt="rightmost image for the resources page" />
            <Image className="col-start-7 row-start-6 col-span-3 row-span-4" src={Image2Right} alt="leftmost rightward image for the resource page" />
            <Image className="col-start-4 row-start-2 col-span-4 row-span-5" src={Image2Left} alt="nearest right leftmost image for resource page"/>
            <Image className="col-start-2 row-start-3 col-span-4 row-span-5" src={Image1Left} alt="leftmost image for resources page" />
            <Image className="col-start-1 row-start-1 col-span-6 row-span-full m-4" src={ResourceLeftBackgroundLarge} alt="background image for resources page (large)" />
            <Image className="col-start-10 row-start-1 col-span-full row-span-4 mr-4" src={ResourceRightBackgroundLarge} alt="background for resource image large"/>
        </div>
    </div>);
}