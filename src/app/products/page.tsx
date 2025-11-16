"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Heart, Pencil, Plus } from "lucide-react";
import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/dashboardHeader";
import { useState } from "react";

// Product Type
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  liked: boolean;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Chocolate brownie (350 gram)",
      image: "/Cake_1.png",
      price: 120,
      rating: 4.5,
      reviews: 131,
      liked: false,
    },
    {
      id: "2",
      name: "wind up music box vintage look",
      image: "/Film_Box.png",
      price: 60,
      rating: 4,
      reviews: 64,
      liked: false,
    },
    {
      id: "3",
      name: "Chocolate brownie (350 gram)",
      image: "/Cake_2.png",
      price: 120,
      rating: 4.5,
      reviews: 131,
      liked: false,
    },
    {
      id: "4",
      name: "Chocolate brownie (350 gram)",
      image: "/Cake_3.png",
      price: 120,
      rating: 4.5,
      reviews: 131,
      liked: false,
    },
    {
      id: "5",
      name: "Chocolate brownie (350 gram)",
      image: "/Cake_1.png",
      price: 120,
      rating: 4.5,
      reviews: 131,
      liked: false,
    },
    {
      id: "6",
      name: "Chocolate brownie (350 gram)",
      image: "/Cake_3.png",
      price: 120,
      rating: 4.5,
      reviews: 131,
      liked: false,
    },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sticky Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5 flex flex-col justify-between sticky top-0 h-screen">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <Header />

        <div className="p-6">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold text-gray-800">Products</h1>

            <button className="flex items-center border cursor-pointer gap-2 bg-yellow-400 hover:border-gray-300 hover:text-yellow-400 hover:bg-transparent duration-400 text-white px-4 py-2 rounded-xl shadow transition">
              <Plus size={18} /> Add New Product
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl shadow p-4 border border-gray-200"
              >
                {/* Product Image */}
                <div className="relative w-full h-60 rounded-lg overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />

                  {/* Left Arrow */}
                  <button
                    type="button"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                  >
                    <ArrowLeft size={16} />
                  </button>

                  {/* Right Arrow */}
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Product Name */}
                <h3 className="text-lg text-gray-800 font-semibold mt-4">
                  {p.name}
                </h3>

                {/* Price */}
                <p className="text-blue-600 font-semibold text-sm mt-1">
                  ₹{p.price.toFixed(2)}
                </p>

                {/* Rating */}
                <p className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                  {"★".repeat(Math.floor(p.rating))}
                  {"☆".repeat(5 - Math.floor(p.rating))}
                  <span className="text-gray-500 ml-1">({p.reviews})</span>
                </p>

                {/* Actions */}
                <div className="flex justify-between items-center mt-4">
                  {/* Edit Button */}
                  <button className="flex items-center cursor-pointer text-gray-600 gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                    <Pencil size={16} />
                    Edit Product
                  </button>

                  {/* Like / Favorite */}
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-600"
                  >
                    <Heart size={22} fill={p.liked ? "red" : "none"} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
