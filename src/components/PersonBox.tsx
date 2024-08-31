interface PersonBoxProps {
    className:string,
    name:string,
    position: string,
    image:any,
}

import Image from "next/image";

export default async function PersonBox(props:PersonBoxProps) {
    return (
        <div className={`${props.className}`}>
            <Image src={props.image} alt={`Image for ${props.name}, who is ${props.position}`}/>
        </div>
    );
}