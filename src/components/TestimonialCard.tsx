"use client";

import Image from "next/image";
import StarRating from "./TestimonialStars";

type TestimonialProps = {
  name: string;
  avatar: string;
  review: string;
};

export default function TestimonialCard({
  name,
  avatar,
  review,
}: TestimonialProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-gray-800">
      {/* User */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <div className="mt-1">
            <StarRating count={5} />
          </div>
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-300">"{review}"</p>
    </div>
  );
}
