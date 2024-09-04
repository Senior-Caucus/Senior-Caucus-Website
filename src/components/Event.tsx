import Image from "next/image";
import findOutArrow from "public/images/FindOutArrow.svg";


interface EventProps {
    className:string,
    name: string,
    date: string,
    description: string,
    link: string,
    image: any,
}

export default async function Event(props:EventProps) {
    return (
        <div className="flex flex-col flex-nowrap w-60 h-auto m-4">
            <Image loading="lazy" className="rounded-lg" src={props.image} alt="resource image" width={300} height={300} />
            <div className="inter-extralight text-3xl text-left italic">{props.name}</div>
            <div className="inter-extralight text-sm text-left inter-extralight">{props.date}</div>
            <div className="">{props.description}</div>
            <div className='transition-transform hover:translate-x-1'>
                <a href={props.link.trim()} className="">
                    <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                    <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6" />
                </a>
            </div>
        </div>
    );
}