"use client";

import { Cake, Heart, Film, Users } from "lucide-react";

export default function WhyChoseUs() {
  const features = [
    {
      icon: <Cake size={32} className="text-yellow-300" />,
      title: "Perfect for Birthdays",
      description:
        "Surprise your loved ones with a unique celebration in a private cinema setting",
    },
    {
      icon: <Heart size={32} className="text-yellow-300" />,
      title: "Romantic Anniversaries",
      description:
        "Create unforgettable moments with your partner in an intimate theatre experience",
    },
    {
      icon: <Film size={32} className="text-yellow-300" />,
      title: "Premium Movie Experience",
      description:
        "Enjoy blockbusters with state-of-the-art sound and projection systems",
    },
    {
      icon: <Users size={32} className="text-yellow-300" />,
      title: "Quality Family Time",
      description:
        "Bond with your family in a comfortable, private environment",
    },
  ];

  return (
    <section id="value-proposition" 
    className="relative py-24 px-8 bg-black before:absolute before:top-0 before:left-0 before:right-0 before:h-32 
             before:bg-linear-to-t before:from-black before:to-transparent before:-translate-y-32">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold mb-4">
            Why Choose a{" "}
            <span className="text-yellow-300">Private Theatre?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Transform ordinary moments into extraordinary memories
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-2xl p-8 border border-gray-800 
              hover:border-yellow-300/50 transition-all hover:shadow-xl 
              hover:shadow-yellow-300/10 group"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 bg-yellow-300/10 rounded-full flex 
                items-center justify-center mb-6 group-hover:scale-110 
                transition-transform"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-xl font-bold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
