import ResourceLeftBackgroundLarge from "public/images/ResourceBackgroundLeft1.svg"
import ResourceRightBackgroundLarge from "public/images/ResourceBackgroundRightLarge.svg"
import Image from "next/image";
import Image1Left from "public/images/ResourceImageLeft1.png";
import Image2Left from "public/images/ResourceImageLeft2.png";
import Image1Right from "public/images/ResourceImageRight1.png";
import Image2Right from "public/images/ResourceImageRight2.png";
import MobileResourceHero from "public/images/MobileResourceHero.svg";
import Resource from "@/components/Resource";
import { getResources } from "@/actions/googleSheetsActions";
import { Suspense } from "react";

export default async function ResourcesPage() {
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
        <div className="w-screen min-h-[75vh]">
            <Suspense fallback={<div className="h-[50%]"><LoadingSpinner /></div>}>
                <ResourceList />
            </Suspense>
        </div>
    </div>);
}

async function ResourceList() {
    const resourceresp = await getResources();
    let resourcesList: string[][] = []
    if (resourceresp !== null && resourceresp !== undefined) {
        resourcesList = resourceresp;
    }
    return (
        <div className="grid p-10">
            {
                resourcesList.map((resource, index) => (
                    <Resource className="mt-10" key={index} name={resource[0]} description={resource[1]} link={resource[2]} />
                ))
            }
        </div>
    );
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