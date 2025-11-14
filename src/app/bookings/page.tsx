"use client";

import { Calendar, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { aside } from "framer-motion/client";
import Sidebar from "@/components/ui/sidebar";

const bookings = [
  {
    id: "00001",
    name: "Christine Brooks",
    theater: "Theater 1",
    date: "04 Sep 2019",
    slot: "09:00 AM - 12:00 PM",
    payment: "₹1799 INR",
    status: "success",
    created: "04 Nov 2025 11:11 AM",
  },
  {
    id: "00002",
    name: "Christine Brooks",
    theater: "Theater 2",
    date: "04 Sep 2019",
    slot: "09:00 AM - 12:00 PM",
    payment: "₹2599 INR",
    status: "success",
    created: "04 Nov 2025 11:11 AM",
  },
  {
    id: "00003",
    name: "Christine Brooks",
    theater: "Theater 3",
    date: "04 Sep 2019",
    slot: "09:00 AM - 12:00 PM",
    payment: "Failed",
    status: "failed",
    created: "04 Nov 2025 11:11 AM",
  },
  {
    id: "00004",
    name: "Christine Brooks",
    theater: "Theater 1",
    date: "04 Sep 2019",
    slot: "09:00 AM - 12:00 PM",
    payment: "Failed",
    status: "failed",
    created: "04 Nov 2025 11:11 AM",
  },
  {
    id: "00005",
    name: "Christine Brooks",
    theater: "Theater 1",
    date: "04 Sep 2019",
    slot: "09:00 AM - 12:00 PM",
    payment: "₹2599 INR",
    status: "success",
    created: "04 Nov 2025 11:11 AM",
  },
  {
    id: "00008",
    name: "Christine Brooks",
    theater: "Theater 1",
    date: "04 Sep 2019",
    slot: "09:00 AM - 12:00 PM",
    payment: "On Hold",
    status: "hold",
    created: "04 Nov 2025 11:11 AM",
  },
];

export default function BookingsPage() {
  return (
    <div className=" flex bg-gray-50 min-h-screen">
      <aside className="w-64 bg-white shadow-md p-5 flex flex-col justify-between">
        <Sidebar />
      </aside>
      <main className=" flex-1 p-8">
        {/* Title */}
        <h1 className="text-3xl text-black font-semibold mb-6">Order Lists</h1>

        {/* Filters Bar */}
        <Card className="mb-6 w-full">
          <CardContent className="p-4 flex flex-row items-center gap-8">
            {/* Filter Icon */}
            <div className="flex items-center gap-2">
              <Filter size={20} />
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300" />

            {/* Date Filter */}
            <div className="flex items-center gap-2 cursor-pointer">
              <Calendar size={18} />
              <span>Date</span>
              <ChevronDown size={18} />
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300" />

            {/* Order Type */}
            <div className="flex items-center cursor-pointer gap-2">
              <span>Order Type</span>
              <ChevronDown size={18} />
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300" />

            {/* Order Status */}
            <div className="flex items-center cursor-pointer text-gray-400 gap-2">
              <span>Order Status</span>
              <ChevronDown size={18} />
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300" />

            {/* Reset Filter */}
            <div className="text-red-500 cursor-pointer flex items-center gap-1">
              <span>⟳</span> Reset Filter
            </div>
          </CardContent>
        </Card>

        {/* Bookings Table */}
        <Card>
          <CardContent className="p-0">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Theater</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Slot</th>
                  <th className="p-4">Payment</th>
                  <th className="p-4">Action</th>
                  <th className="p-4">Created</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((order, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{order.id}</td>
                    <td className="p-4">{order.name}</td>
                    <td className="p-4">{order.theater}</td>
                    <td className="p-4">{order.date}</td>
                    <td className="p-4">{order.slot}</td>

                    {/* PAYMENT STATUS PILL */}
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "success"
                            ? "bg-green-100 text-green-700"
                            : order.status === "failed"
                            ? "bg-red-100 text-red-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {order.payment}
                      </span>
                    </td>

                    {/* Edit Button */}
                    <td className="p-4">
                      <button className="px-4 py-1 border border-blue-400 text-blue-500 rounded-full hover:bg-blue-50">
                        Edit
                      </button>
                    </td>

                    <td className="p-4 text-gray-500">{order.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
