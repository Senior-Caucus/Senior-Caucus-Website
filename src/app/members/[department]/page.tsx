"use server"
import { DepartmentPageProps } from "@/@types/PagePropTypes";
import { getMemberData, getNamefromAA } from "@/actions/googleSheetsActions";
import Image from "next/image";

import DepartmentBackgroundLarge from "public/images/DepartmentBackgroundLarge.svg";
import DepartmentBackgroundSmall from "public/images/DepartmentBackgroundSmall.svg";

import PersonBox from "@/components/PersonBox";

export default async function DepartmentPage(props: DepartmentPageProps) {
    const data = await getMemberData(props.params.department);

    let directorInfo = [];
    let memberInfo = [];

    if (data === null || data === undefined) {
        console.error("An error occurred.")
    }
    else {
        for (const element of data) {
            console.log((element[1] as String));
            if ((element[1] as String).toLowerCase().includes("director")) {
                directorInfo.push(element);
            } else {
                memberInfo.push(element)
            }
        }
    }

    let name = [["ERROR"]];
    const nameresp = await getNamefromAA(props.params.department);
    name = (nameresp !== undefined && nameresp !== null ? nameresp : name);


    console.log(name[0][0]);

    return (<div className="min-h-screen w-screen relative">
        <Image className="invisible md:visible absolute left-0 right-0 w-full h-full object-cover -z-1 " src={DepartmentBackgroundLarge} alt="department background" />
        <Image className="visible md:invisible absolute left-0 right-0 w-full h-full object-cover -z-1" src={DepartmentBackgroundSmall} alt="small department background" />
        <div className="inter-extralight w-screen text-center text-6xl md:text-7xl">
            {name[0][0]}
        </div>
        <div className="inter-bold w-screen text-left text-4xl sm:text-5xl">
            Directors
        </div>
        <div className="w-screen h-10" />
        <div className="flex flex-wrap flex-row h-auto">
            {directorInfo.map((element, index) => (
                <PersonBox
                    className="w-[32rem] h-[15rem]"
                    key={index}
                    name={element[0]}
                    position={element[1]}
                    image={element[2]}
                    description={element[3]}
                />
            ))}
        </div>
        <div className="w-screen h-20" />

        <div className="inter-bold w-screen text-left text-4xl sm:text-5xl">
            Members
        </div>
        <div className="w-screen h-10" />
        <div className="flex flex-wrap flex-row h-fit">
            {memberInfo.map((element, index) => (
                <PersonBox
                    className="w-[calc(15rem+26vw+10px)] h-[15rem]"
                    key={index}
                    name={element[0]}
                    position={element[1]}
                    image={element[2]}
                    description={element[3]}
                />
            ))}
        </div>
    </div>);
}