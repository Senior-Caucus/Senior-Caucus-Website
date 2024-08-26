"use server"

export default async function AboutUs() {
    return (
        <div className="about-us-container m-10 w-full flex">
            <h1 className="inter-extralight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">About Us</h1>

            {/* Gray box as a placeholder for an image */}
            <div className="w-1/2 h-1/2 bg-gray-200"></div>
        </div>
    );
}