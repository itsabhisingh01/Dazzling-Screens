"use client";

import Image from "next/image";

type AddOnCardProps = {
  title: string;
  description: string;
  img: string;
};

export default function AddOnCard({ title, description, img }: AddOnCardProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-gray-800 hover:border-yellow-300 transition-all hover:shadow-lg hover:shadow-yellow-accent/20 group cursor-pointer">
      {/* Image */}
      <div className="h-48 mb-6 overflow-hidden rounded-xl">
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>

      {/* Text */}
      <h3 className="font-cinzel text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
