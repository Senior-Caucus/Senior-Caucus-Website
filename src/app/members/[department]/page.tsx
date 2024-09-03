"use server"
import { DepartmentPageProps } from "@/@types/PagePropTypes";
import { getMemberData, getNamefromAA } from "@/actions/googleSheetsActions";
import Image from "next/image";

import DepartmentBackgroundLarge from "public/images/DepartmentBackgroundLarge.svg";
import DepartmentBackgroundSmall from "public/images/DepartmentBackgroundSmall.svg";

import PersonBox from "@/components/PersonBox";
import { Suspense } from "react";

export default async function DepartmentPage(props: DepartmentPageProps) {
    return (
        <Suspense fallback={<LoadingDepartment {...props} />}>
            <DepartmentPageLoaded {...props} />
        </Suspense>
    );
}


function LoadingDepartment(props: DepartmentPageProps) {
    const departmentUrls: { [key: string]: string } = {
        "events": "Events",
        "graphics": "Graphics",
        "internals": "Internals",
        "externals": "Externals",
        "it": "I/T",
        "socialmedia": "Social Media",
        "media": "Media",
    };

    return (
        <div className="min-h-screen w-screen relative">
            <Image className="invisible md:visible absolute left-0 right-0 w-full h-full object-cover" src={DepartmentBackgroundLarge} alt="department background" />
            <Image className="visible md:invisible absolute left-0 right-0 w-full h-full object-cover" src={DepartmentBackgroundSmall} alt="small department background" />
            <div className="inter-extralight w-screen text-center text-6xl md:text-7xl">
                {departmentUrls[(props.params.department as string)]}
            </div>

            <div className="inter-bold w-screen text-center sm:text-left text-4xl sm:text-5xl mt-10 sm:mt-0">
                Directors
            </div>
            <div className="w-screen h-52" />
            <div className="inter-bold w-screen text-center sm:text-left text-4xl sm:text-5xl">
                Members
            </div>
            <div className="w-screen h-42" />
            <div className="w-screen h-28" />
        </div>
    );
}


async function DepartmentPageLoaded(props: DepartmentPageProps) {
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
        <Image className="invisible md:visible absolute left-0 right-0 w-full h-full object-cover" src={DepartmentBackgroundLarge} alt="department background" />
        <Image className="visible md:invisible absolute left-0 right-0 w-full h-full object-cover" src={DepartmentBackgroundSmall} alt="small department background" />
        <div className="inter-extralight w-screen text-center text-6xl md:text-7xl">
            {name[0][0]}
        </div>

        <div className="inter-bold w-screen text-center sm:text-left text-4xl sm:text-5xl mt-10 sm:mt-0">
            Directors
        </div>
        <div className="w-screen h-10" />
        <div className="flex flex-wrap flex-row h-auto w-screen">
            {directorInfo.map((element, index) => (
                <PersonBox
                    className="w-[31rem] h-[15rem] mt-10 sm:mt-0"
                    key={index}
                    name={element[0]}
                    position={element[1]}
                    image={element[2]}
                    description={element[3]}
                />
            ))}
        </div>
        <div className="w-screen h-20" />

        <div className="inter-bold w-screen text-center sm:text-left text-4xl sm:text-5xl">
            Members
        </div>
        <div className="w-screen h-10" />
        <div className="flex flex-wrap flex-row h-auto w-lvw -mr-10">
            {memberInfo.map((element, index) => (
                <PersonBox
                    className="w-[calc(31rem)] h-[15rem] mt-10 sm:mt-0"
                    key={index}
                    name={element[0]}
                    position={element[1]}
                    image={element[2]}
                    description={element[3]}
                />
            ))}
        </div>
        <div className="w-screen h-28" />
    </div>);
}
