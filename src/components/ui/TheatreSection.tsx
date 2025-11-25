"use client";

import TheatreCard from "../TheatreCard";
import { ArrowRight } from "lucide-react";

export default function TheatresPreview() {
  const theatres = [
    {
      title: "Royal Cinema Hall",
      description: "Premium private theatre with HD surround experience",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a804f4164b-7fd86279c255e0fbb13c.png",
      rating: 4.9,
      capacity: "6",
      price: "₹2,999",
    },
    {
      title: "Elite Screening Lounge",
      description: "Intimate setting perfect for couples and small groups",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8178dddd61-d42c77eb7a4f53ee2e96.png",
      rating: 4.8,
      capacity: "4",
      price: "₹2,499",
    },
    {
      title: "Grand Celebration Theatre",
      description: "Spacious venue ideal for parties and group celebrations",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b0f274c44e-098ce2f23260bcce7792.png",
      rating: 4.7,
      capacity: "10",
      price: "₹4,499",
    },
  ];

  return (
    <section
      id="theatres-preview"
      className="py-24 px-8 bg-linear-to-b from-black to-black/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold mb-4">
            Our <span className="text-yellow-300">Premium Theatres</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Choose from our collection of luxury screening rooms
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {theatres.map((theatre, index) => (
            <TheatreCard key={index} {...theatre} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-400 font-semibold text-lg transition-colors">
            Explore All Theatres <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
