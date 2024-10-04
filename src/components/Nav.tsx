'use client'
import Link from "next/link"
import Image from "next/image"
import CaucusLogo from "public/images/CaucusLogo.svg"
import { useState } from "react";


export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (<div >
        <div className="h-[5rem] nav flex justify-between items-center px-6 py-4 bg-white">
            <Link href="/" className="hover:scale-105">
                <Image className="w-40" src={CaucusLogo} alt="Senior Caucus Logo" />
            </Link>
            <div className="menu md:flex space-x-6 hidden">
                <Link href="/members" className="text-black hover:text-caucusblue inter-bold hover:scale-105">Members</Link>
                <Link href="/events" className="text-black hover:text-caucusblue inter-bold hover:scale-105">Events</Link>
                <Link href="/resources" className="text-black hover:text-caucusblue inter-bold hover:scale-105">Resources</Link>
            </div>
            <div className="sandwich-menu md:hidden">
                <button onClick={toggleMenu}>
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>
        {menuOpen && (
                <div className="mobile-menu flex flex-col items-center py-4 space-y-4 bg-white shadow-md">
                    <Link href="/members" className="text-black hover:text-caucusblue inter-bold hover:scale-105" onClick={closeMenu}>Members</Link>
                    <Link href="/events" className="text-black hover:text-caucusblue inter-bold hover:scale-105" onClick={closeMenu}>Events</Link>
                    <Link href="/resources" className="text-black hover:text-caucusblue inter-bold hover:scale-105" onClick={closeMenu}>Resources</Link>
                </div>
            )}
    </div>)
}