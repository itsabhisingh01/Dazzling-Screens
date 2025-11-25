"use client";

import { LucideIcon } from "lucide-react";

type HowItWorksStepProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function HowItWorksStep({
  icon: Icon,
  title,
  description,
}: HowItWorksStepProps) {
  return (
    <div className="text-center">
      {/* Yellow Circle */}
      <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
        <Icon className="text-black" size={36} />
      </div>

      <h3 className="font-cinzel text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
