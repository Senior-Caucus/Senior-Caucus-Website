"use server";


import HomeHero from '@/components/HomeHero';
import AboutUs from '@/components/AboutUs';

export default async function Home() {
  return (
    <div>
      <HomeHero />
      <div className="w-screen h-screen">
        <AboutUs />
      </div>
    </div>
  );
}