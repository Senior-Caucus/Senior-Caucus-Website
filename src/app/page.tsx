"use server";


import HomeHero from '@/components/HomeHero';

export default async function Home() {
  return (
    <div>
      <HomeHero />
      <div className="w-screen h-screen">
        
      </div>
    </div>
  );
}