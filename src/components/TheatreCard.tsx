"use client";

import Image from "next/image";
import { Star, Users, Utensils, Gift } from "lucide-react";

type TheatreCardProps = {
  title: string;
  description: string;
  img: string;
  rating: number;
  capacity: string;
  price: string;
};

export default function TheatreCard({
  title,
  description,
  img,
  rating,
  capacity,
  price,
}: TheatreCardProps) {
  return (
    <article className="bg-[#1A1A1A] rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-300/30 transition-all shadow-2xl group">
      {/* Image */}
      <div className="relative h-70 overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
          <Star className="text-yellow-300" size={16} />
          <span className="font-semibold text-sm">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-cinzel text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Features */}
        <div className="flex items-center gap-6 text-sm mb-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Users className="text-yellow-300" size={18} />
            <span>Up to {capacity}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <Utensils className="text-yellow-300" size={18} />
            <span>Food</span>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <Gift className="text-yellow-300" size={18} />
            <span>Decor</span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div>
            <div className="text-2xl font-bold text-yellow-300">{price}</div>
            <div className="text-xs text-gray-400">{capacity} people</div>
          </div>

          <button className="px-6 py-3 bg-yellow-300 text-black rounded-full font-bold text-sm hover:shadow-lg hover:shadow-yellow-300/50 transition-all">
            Check Availability
          </button>
        </div>
      </div>
    </article>
  );
}
