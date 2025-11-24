"use client";

import { Film } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-dark-bg/90 backdrop-blur-sm border-b border-gray-800/50 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image 
          className=" bg-yellow-300 rounded-lg"
          src="/dazzling_logo.png" width={40} height={40} alt="Dazzling Screens logo" />
          <h1 className=" font-cinzel text-2xl font-bold tracking-wide">
            Dazzling Screens
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {["Home", "Theatres", "Gallery", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-300 text-md hover:text-yellow-300 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-300 after:transition-all hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="px-8 py-3 cursor-pointer bg-yellow-300 text-gray-900
         rounded-full font-bold text-sm hover:shadow-xl transition-all glow-btn">
          Book Now
        </button>
      </div>
    </header>
  );
}
