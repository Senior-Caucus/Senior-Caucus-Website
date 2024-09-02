"use server"
import Link from "next/link";
import Image from "next/image";
import PersonBox from "@/components/PersonBox";
import findOutArrow from "public/images/FindOutArrow.svg";

interface directorInfoProps {
    directorName: string,
    position: string,
    image: any,
    description: string,
}

interface DepartmentSectionProps {
    className: string | null;
    departmentName: string;
    departmentLink: string;
    departmentDescription: string;
    director1info: directorInfoProps;
    director2info: directorInfoProps | null
}
export default async function DepartmentSection(props: DepartmentSectionProps) {
    return (
        <div className={`w-screen h-screen md:h-[60vh] grid grid-cols-12 grid-rows-12 ${props.className !== null ? props.className:""}`} >
            <div className="italic text-7xl md:text-8xl ml-3 col-start-1 row-start-1 col-span-full row-span-1">
                {props.departmentName}
            </div>
            <div className="text-1xl inter-extralight row-start-2 md:row-start-3 col-start-1 col-span-9 row-span-1 ml-3 mt-8 md:mt-3">
                {props.departmentDescription}
            </div>
            <div className="col-start-1 row-start-6 lg:row-start-5 row-span-full col-span-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-screen h-auto -mt-10 md:-mt-4 -ml-1">
                <PersonBox
                    className="md:-ml-11 col-start-1 col-span-1 row-start-1 row-span-1 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1"
                    name={props.director1info.directorName}
                    position={props.director1info.position}
                    image={props.director1info.image}
                    description={props.director1info.description}
                />
                {props.director2info !== null &&
                    <PersonBox
                        className="md:-ml-10 col-start-1 col-span-1 row-start-2 row-span-1 md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-1"
                        name={props.director2info.directorName}
                        position={props.director2info.position}
                        image={props.director2info.image}
                        description={props.director2info.description}
                    />}
            </div>
            <div className="row-start-12 md:row-start-11 lg:row-start-10 col-start-1 col-span-full row-span-1 bold ml-3 mt-6 transition-transform hover:translate-x-1">
                <Link href={`/members/${props.departmentLink.trim()}`} className="">
                    <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
                    <Image src={findOutArrow} alt="arrow to find out more" className="inline-block ml-1 w-6 h-6" />
                </Link>
            </div>
        </div>
    )
}