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
            <div className="grid grid-cols-12 grid-rows-12">
                <Image className="rounded-md col-start-2 col-span-4 row-start-1 row-span-4" src={props.image} alt={`Image for ${props.name}, who is ${props.position}`} />
                <div className="ml-2 col-start-6 col-span-6 row-start-1 row-span-11">
                    <div className="inter-bold">
                        {props.name}
                    </div>
                    <div className="italic">
                        {props.position}
                    </div>
                    <div className="col-start-7 inter-extralight ">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    );
}