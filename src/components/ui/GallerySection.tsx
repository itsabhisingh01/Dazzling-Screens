"use client";

import { ArrowRight } from "lucide-react";
import GalleryImage from "../GalleryImageCard";

export default function GallerySection() {
  const galleryItems = [
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/6c41deb60a-c56e39e95aabfb6c62f7.png",
      alt: "birthday party setup in private theatre with balloons and decorations",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/fc47ac11ae-9d150e76403cd53861ea.png",
      alt: "romantic anniversary celebration in cinema with rose petals and candles",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/38356db480-62f7909c6ed1deeffedb.png",
      alt: "surprise proposal setup in private theatre with romantic lighting",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/fb1769b41e-21ea08f4345a99ec52e4.png",
      alt: "luxury private theatre interior with ambient golden lighting",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/6becf2f266-5df51f251b6ecd3a367f.png",
      alt: "family enjoying movie in private cinema with snacks",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e9ee63bc95-d0f250fc54bfbad7b56b.png",
      alt: "cake cutting ceremony in private theatre with celebration theme",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2d9ab76e86-1092e8898d4aade8bdf4.png",
      alt: "group of friends celebrating in private cinema with decorations",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d78c5d06ee-0c085a0cf3a38debb90e.png",
      alt: "elegant theatre setup with golden accents and premium seating",
    },
  ];

  return (
    <section
      id="gallery-section"
      className="py-24 px-8 bg-linear-to-b "
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold mb-4">
            Experience <span className="text-yellow-300">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg">
            See how we've made celebrations unforgettable
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {galleryItems.map((item, i) => (
            <GalleryImage key={i} src={item.src} alt={item.alt} />
          ))}
        </div>

        {/* View Full Gallery */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-400 font-semibold text-lg transition-colors"
          >
            View Full Gallery
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
