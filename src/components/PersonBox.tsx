interface PersonBoxProps {
    className: string,
    name: string,
    position: string,
    description: string,
    image: any,
}

import Image from "next/image";

export default async function PersonBox(props: PersonBoxProps) {
    return (
        <div className={`${props.className}`}>
            <div className="gap-2 grid grid-cols-12 grid-rows-12">
                <Image className="col-start-2 col-span-4 row-start-1 row-span-4 m-4"  src={props.image} alt={`Image for ${props.name}, who is ${props.position}`} />
                <div className="inter-bold col-start-7 col-span-full row-start-1 row-span-1">
                    {/* <div>

                    </div> */}
                    {props.name}
                </div>
                <div className="italic col-start-7 col-span-full row-start-2 row-span-1">
                    {props.position}
                </div>
                <div className="col-start-7 col-span-full row-start-3 row-span-full">
                    {props.description}
                </div>
            </div>
        </div>
    );
}