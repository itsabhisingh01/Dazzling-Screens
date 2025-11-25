"use client";

import Image from "next/image";

type GalleryImageProps = {
  src: string;
  alt: string;
};

export default function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <div className="h-64 overflow-hidden rounded-2xl border border-gray-800 hover:border-yellow-300 transition-all group cursor-pointer">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
  );
}
