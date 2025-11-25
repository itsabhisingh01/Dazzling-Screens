"use client";

import StarRating from "../TestimonialStars";
import TestimonialCard from "../TestimonialCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      review:
        "Celebrated my husband's birthday here. The ambiance was perfect and the staff made it truly special. Highly recommend!",
    },
    {
      name: "Rahul Mehta",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      review:
        "Proposed to my girlfriend here and she said yes! The decoration and privacy made it an unforgettable moment.",
    },
    {
      name: "Anjali Kapoor",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      review:
        "Best family experience ever! The kids loved it and we enjoyed quality time together. Worth every penny!",
    },
  ];

  return (
    <section id="testimonials-section" className="py-24 px-8 bg-black ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold mb-4">
            What Our <span className="text-yellow-300">Customers Say</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-4">
            <StarRating count={5} />
            <span className="text-3xl font-bold text-yellow-300">4.9</span>
          </div>

          <p className="text-gray-400 text-lg">
            Average rating from 2,000+ Happy Customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
