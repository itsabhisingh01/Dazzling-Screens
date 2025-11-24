"use client";

import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6137374a0f-47b76cd795190e0b8d42.png"
          alt="Cinematic Private Theatre Background"
          fill
          className="object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,215,0,0.15) 0%, rgba(14,14,14,0.95) 70%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-8">
        <h1 className="font-cinzel text-6xl font-bold mb-6 leading-tight opacity-0 animate-fadeUp">
          Celebrate Your Special Moments <br />
          in a <span className=" text-yellow-300">Private Theatre</span>
        </h1>

        <p className="text-2xl text-gray-300 mb-4 opacity-0 animate-fadeUp delay-200">
          Birthdays • Anniversaries • Proposals • Surprise Parties
        </p>

        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto opacity-0 animate-fadeUp delay-300">
          Experience cinema like never before in your own exclusive screening
          room with premium amenities and personalized celebrations
        </p>

        <div className="flex items-center justify-center gap-6 opacity-0 animate-fadeUp delay-500">
          <button className="px-10 py-4 bg-yellow-300 text-gray-900 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-accent/60 cursor-pointer transition-all glow-btn">
            Book Your Private Theatre
            <ArrowRight className="inline-block ml-2" size={20} />
          </button>

          <button className="px-8 py-4 border-2 border-yellow-300 text-yellow-300 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-gray-900 transition-all duration-300 cursor-pointer flex items-center">
            <Play className="mr-2 hover:text-gray-900" size={20} />
            Watch Experience Video
          </button>
        </div>
      </div>
    </section>
  );
}
