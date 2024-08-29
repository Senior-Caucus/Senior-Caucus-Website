
import Image from "next/image";
import ticktoklogo from "public/images/tiktoklogo.svg";
import instalogo from "public/images/instalogo.svg";
import facebooklogo from "public/images/facebooklogo.svg";
import sulogo from "public/images/sulogo.svg";
import AttributionFooter from "public/images/AttributionFooter.png"

import footerBigBackground from "public/images/FooterBigBackground.svg"

export default async function Footer() {
    return (<div className="w-screen h-80 grid grid-cols-12 grid-rows-12">
        <Image className="w-fit h-fit col-start-2 row-start-2 row-span-10 col-span-10 lg:col-start-4 lg:row-start-4 lg:col-span-7 lg:row-span-4" src={footerBigBackground} alt="footer background with big size" />
        <div className="col-start-2 col-span-9 sm:col-start-4 sm:col-span-5 lg:col-start-5 lg:col-span-4 justify-between row-start-1 row-span-1 flex flex-row w-fill h-fill">
            <a href="google.com" className="transition-transform hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <Image className="w-10 h-10" src={ticktoklogo} alt="ticktok logo" />

            </a>
            <a href="google.com" className="transition-transform hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <Image className="w-10 h-10" src={instalogo} alt="instagram logo" />
            </a>
            <a href="google.com" className="transition-transform hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <Image className="w-10 h-10" src={facebooklogo} alt="facebook logo" />
            </a>
            <a href="google.com" className="transition-transform hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <Image className="w-10 h-10" src={sulogo} alt="su logo" />
            </a>
        </div>
        <div className="row-start-4 row-span-1 col-start-1 col-span-full text-1xl flex justify-center">
            <div className="text-1xl">
                Built by the Senior Caucus I/T Department
            </div>
        </div>
        <div className="row-start-5 row-span-1 col-start-1 col-span-full text-1xl flex justify-center">
            <div className="flex flex-col w-fill h-fill">
                <div className="flex flex-row justify-start">
                    <div className="inter-bold">Directors</div>
                    <div className="w-5" />
                    <div>
                        <a href="https://github.com/Elias2660" className="w-fit h-fit transition-transform hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <div className="inline w-1 h-1">Elias Xu</div>
                        </a> and
                        <a href="https://github.com/yellowstonepark" className="transition-transform hover:-translate-y-1 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <div className="inline w-1 h-1"> Otzar Jaffe</div>
                        </a>
                    </div>
                </div>

                <div className="flex flex-row justify-start">
                    <div className="inter-bold">Graphics</div>
                    <div className="w-5" />
                    <div> </div>
                </div>
                <div className="flex flex-row justify-start">
                    <div className="inter-bold">Media</div>
                    <div className="w-5" />
                    <div> </div>
                </div>
            </div>
        </div>

        <div className="row-start-9 row-span-1 col-start-0 col-span-full w-fill h-fill flex flex-row justify-center">
            <div className="text-1xl h-fit w-fit text-center">
                The Senior Caucus is led by Josephine Yoo and Grace Rhee.
            </div>
        </div>


        <div className="row-start-11 row-span-full col-start-0 col-span-full flex w-fill h-fill flex-row justify-center">
            <a href="https://stuy.enschool.org/" className="transition-transform hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" >
                <Image className="content-center h-fit w-fit" src={AttributionFooter} alt="attribtion logo" />
            </a>
        </div>
    </div>);
}