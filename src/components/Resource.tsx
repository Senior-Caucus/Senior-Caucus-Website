"use server"
import Image from "next/image";
import findOutArrow from "public/images/FindOutArrow.svg"

interface ResourceProps {
    className: string;
    name: string;
    description: string;
    link: string,
}

export default async function Resource(props: ResourceProps) {
    return (
        <div className={`${props.className}`}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_3fr] md:items-start md:pl-10 md:pr-10 pl-5 pr-5">
            <div className="resourceNameContainer h-full flex md:justify-center p-0">
                <div className="h-fit text-4xl md:text-6xl inter-regular p-0">{props.name}</div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="inter-extralight text-2xl">{props.description}</p>
                <div className="transition-transform hover:translate-x-1 cursor-pointer">
                    <a href={props.link.trim()} className="inter-bold underline">Link To {props.name}</a>
                    <Image alt="arrow to find out more" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="inline-block ml-1 w-6 h-6 " src={findOutArrow} />
                </div>
            </div>
        </div>
        </div>
    )
}