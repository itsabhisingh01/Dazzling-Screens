"use client";

import { Star } from "lucide-react";

export default function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={18} className="text-yellow-300 fill-yellow-300" />
      ))}
    </div>
  );
}
