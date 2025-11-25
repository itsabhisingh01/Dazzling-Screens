"use client";

import {
  Film,
  CalendarDays,
  WandSparkles,
  Heart,
} from "lucide-react";
import HowItWorkSteps from "../HowItWorkSteps";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Film,
      title: "Select Theatre",
      description: "Choose from our premium collection of private screening rooms",
    },
    {
      icon: CalendarDays,
      title: "Choose Date & Slots",
      description: "Pick your preferred date and time slot that works for you",
    },
    {
      icon: WandSparkles,
      title: "Customize",
      description: "Add cakes, decorations, and photoshoot packages",
    },
    {
      icon: Heart,
      title: "Pay & Celebrate",
      description: "Complete booking and enjoy your special moment",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 px-8 bg-linear-to-b from-black to-black/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold mb-4">
            How It <span className="text-yellow-300">Works</span>
          </h2>
          <p className="text-gray-400 text-lg">Your celebration in 4 simple steps</p>
        </div>

        {/* Timeline + Steps */}
        <div className="relative">
          {/* Horizontal line (only on large screens) */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-yellow-300/20 via-yellow-300 to-yellow-300/20 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <HowItWorkSteps
                key={i}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
