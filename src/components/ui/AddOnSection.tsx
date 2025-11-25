"use client";

import AddOnCard from "../AddOnCard";

export default function AddOnsSection() {
  const addons = [
    {
      title: "Designer Cakes",
      description: "Custom themed cakes for your celebration",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/18137a0051-9aadc8ca2a0c8be76395.png",
    },
    {
      title: "Decoration Themes",
      description: "Beautiful setups tailored to your occasion",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/34dabb62f8-f4d3f5bda6d4d00518a4.png",
    },
    {
      title: "Photoshoot Packages",
      description: "Capture memories with professional photography",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/6f27cf39e9-9ec95f67ebfad1e66bed.png",
    },
    {
      title: "Snacks & Drinks",
      description: "Gourmet refreshments for your screening",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/cef8a685d3-b356c6a1cf262e0ba148.png",
    },
  ];

  return (
    <section id="addons-section" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold mb-4">
            Celebration <span className="text-yellow-300">Add-Ons</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Customize your experience with premium add-ons
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon, index) => (
            <AddOnCard key={index} {...addon} />
          ))}
        </div>
      </div>
    </section>
  );
}
