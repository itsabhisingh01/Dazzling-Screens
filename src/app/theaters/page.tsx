"use client";

import Image from "next/image";
import { MapPin, Pencil, Trash2, Plus } from "lucide-react";
import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/dashboardHeader";
import { useState } from "react";

// Theater Type
interface Theater {
  id: string;
  name: string;
  image: string;
  location: string;
  active: boolean;
}

export default function TheatersPage() {
  const [theaters, setTheaters] = useState<Theater[]>([
    {
      id: "1",
      name: "Theater 1",
      image: "/Theater_1.png",
      location: "Pitampura, Delhi",
      active: true,
    },
    {
      id: "2",
      name: "Theater 2",
      image: "/Theater_2.png",
      location: "Pitampura, Delhi",
      active: true,
    },
    {
      id: "3",
      name: "Theater 3",
      image: "/Theater_3.png",
      location: "Pitampura, Delhi",
      active: false,
    },
    {
      id: "4",
      name: "Theater 1",
      image: "/Theater_2.png",
      location: "Noida Sector 122, Uttar Pradesh",
      active: true,
    },
    {
      id: "5",
      name: "Theater 2",
      image: "/Theater_3.png",
      location: "Noida Sector 122, Uttar Pradesh",
      active: true,
    },
    {
      id: "6",
      name: "Theater 3",
      image: "/Theater_1.png",
      location: "Noida Sector 122, Uttar Pradesh",
      active: false,
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
            <h1 className="text-3xl font-semibold text-gray-800">Theaters</h1>

            <button className="flex items-center cursor-pointer gap-2 bg-yellow-400 border hover:border-gray-300 hover:text-yellow-400 hover:bg-transparent duration-400 text-white px-4 py-2 rounded-xl shadow transition">
              <Plus size={18} /> Add New Theater
            </button>
          </div>

          {/* Theater Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {theaters.map((theater) => (
              <div
                key={theater.id}
                className="bg-white rounded-xl shadow p-4 border border-gray-200"
              >
                {/* Theater Image */}
                <div className="w-full h-48 relative rounded-lg overflow-hidden">
                  <Image
                    src={theater.image}
                    alt={theater.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title + Active Icon */}
                <div className="flex justify-between items-center mt-4">
                  <h3 className="text-lg text-gray-700 font-semibold">
                    {theater.name}
                  </h3>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      theater.active ? "bg-yellow-300" : "bg-gray-300"
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                </div>

                {/* Location */}
                <p className="flex items-center gap-2 text-gray-500 mt-1">
                  <MapPin size={16} /> {theater.location}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 flex cursor-pointer text-gray-600 border-gray-300 items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-100">
                    <Pencil size={16} /> Edit
                  </button>

                  <button className="flex-1 flex cursor-pointer items-center justify-center gap-2 border rounded-md py-2 text-red-500 hover:bg-red-50">
                    <Trash2 size={16} /> Delete
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
