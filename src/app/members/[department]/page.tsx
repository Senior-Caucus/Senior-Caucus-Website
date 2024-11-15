"use server"
import React from "react";
import { DepartmentPageProps } from "@/@types/PagePropTypes";
import { getDeptPhoto, getMemberData, getNamefromAA } from "@/actions/googleSheetsActions";
import Image from "next/image";

import DepartmentBackgroundLarge from "public/images/DepartmentBackgroundLarge.svg";
import DepartmentBackgroundSmall from "public/images/DepartmentBackgroundSmall.svg";

import DeptPhotoPlaceholder from "public/images/PlaceholderDeptPhoto.png";

import PersonBox from "@/components/PersonBox";
import { Suspense } from "react";

export default async function DepartmentPage(props: any) {
    const resolvedProps = await props;
    return (
        <Suspense fallback={<LoadingDepartment {...resolvedProps} />}>
            <DepartmentPageLoaded {...resolvedProps} />
        </Suspense>
    );
}


async function LoadingDepartment(props: DepartmentPageProps) {
    const departmentUrls: { [key: string]: string } = {
        "events": "Events",
        "graphics": "Graphics",
        "internals": "Internals",
        "externals": "Externals",
        "it": "I/T",
        "socialmedia": "Social Media",
        "media": "Media",
        "finance": "Finance"
    };

    return (
        <div className="min-h-screen w-screen relative">
            <Image className="invisible md:visible absolute left-0 right-0 w-full h-full object-cover" src={DepartmentBackgroundLarge} alt="department background" />
            <Image className="visible md:invisible absolute left-0 right-0 w-full h-full object-cover" src={DepartmentBackgroundSmall} alt="small department background" />
            <div className="inter-extralight w-screen text-center text-6xl md:text-7xl">
                {departmentUrls[(props.params.department as string)]}
            </div>
            <div className="w-screen flex justify-center items-center">

                <Image className="rounded-md w-[60vw] h-auto mt-5 mb-5" src={DeptPhotoPlaceholder} alt="department photo placeholder" />
            </div>
            <div className="inter-bold w-screen text-center sm:text-left text-4xl sm:text-5xl mt-10 sm:mt-0">
                Directors
            </div>
            <div className="w-screen h-52 flex justify-center">
                <LoadingSpinner />
            </div>
            <div className="inter-bold w-screen text-center sm:text-left text-4xl sm:text-5xl">
                Members
            </div>
            <div className="w-screen h-42 flex justify-center">
                <LoadingSpinner />
            </div>
            <div className="w-screen h-28" />
        </div>
    );
}


async function DepartmentPageLoaded(props: DepartmentPageProps) {
    const data = await getMemberData(props.params.department);
    const deptPhotoResult = await getDeptPhoto(props.params.department);
    const sheetURL = deptPhotoResult && deptPhotoResult[0] ? deptPhotoResult[0][0] : null;
    let directorInfo = [];
    let memberInfo = [];

    if (data === null || data === undefined) {
        console.error("An error occurred.")
    }
    else {
        for (const element of data) {
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


    return (<div className="min-h-screen w-screen relative">
        <Image className="invisible md:visible absolute left-0 right-0 w-full h-full object-cover -z-50" src={DepartmentBackgroundLarge} alt="department background" />
        <Image className="visible md:invisible absolute left-0 right-0 w-full h-full object-cover -z-50" src={DepartmentBackgroundSmall} alt="small department background" />
        <div className="inter-extralight w-screen text-center text-6xl md:text-7xl">
            {name[0][0]}
        </div>
        <div className="w-screen items-center flex justify-center">

            <Image className="rounded-md w-[60vw] h-auto mt-5 mb-5" src={sheetURL} alt="Department Photo" width={1600} height={900} />
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

        {memberInfo.length > 0 && <>    <div className="inter-bold w-screen text-center sm:text-left text-4xl sm:text-5xl">
            Members
        </div>
            <div className="w-screen h-10" />
            <div className="flex flex-wrap flex-row h-auto w-lvw -mr-10 -z-10">
                {memberInfo.map((element, index) => (
                    <PersonBox
                        className="w-[calc(31rem)] h-[15rem] mt-10 sm:mt-0 -z-10"
                        key={index}
                        name={element[0]}
                        position={element[1]}
                        image={element[2]}
                        description={element[3]}
                    />
                ))}
            </div></>}
        <div className="w-screen h-28" />
    </div>);
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