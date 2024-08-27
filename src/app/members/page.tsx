"use server"
import Image from "next/image"
import TheTeamHeroBackground from "public/images/TheTeamHeroBackground.svg";

export default async function MemberPage() {
    return (<div>
        <div className="grid grid-cols-12 grid-rows-12 h-[calc(100vh-5rem)] w-lvw">
            <div className="text-6xl row-start-9 col-start-9 mt-10 ml-20 italic">The</div>
            <div className="text-9xl inter-extralight col-start-9 row-start-10 italic">Team</div>
            <Image className="col-start-1 row-start-1 col-span-full row-span-full m-5" src={TheTeamHeroBackground} alt="background for the team hero large"/>
        </div>
    </div>)
}