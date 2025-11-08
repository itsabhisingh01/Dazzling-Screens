"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { User } from "lucide-react";
import { JSX } from "react";

// Type definition for chart data
type ChartData = {
  month: string;
  value: number;
};

// TODO: Add React state & logic later for dynamic data fetching and user interactions

export default function Dashboard(): JSX.Element {
  const data: ChartData[] = [
    { month: "Jan", value: 300 },
    { month: "Feb", value: 400 },
    { month: "Mar", value: 320 },
    { month: "Apr", value: 500 },
    { month: "May", value: 350 },
    { month: "Jun", value: 680 },
    { month: "Jul", value: 400 },
    { month: "Aug", value: 380 },
    { month: "Sep", value: 420 },
    { month: "Oct", value: 440 },
    { month: "Nov", value: 360 },
    { month: "Dec", value: 390 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8 text-yellow-500">🎬 Dazzling</h1>
          <ul className="space-y-4 text-gray-700">
            {[
              "Dashboard",
              "Bookings",
              "Theaters",
              "Coupons",
              "Slots",
              "Schedules",
              "Payments",
              "Security",
              "Settings",
            ].map((item) => (
              <li key={item} className="cursor-pointer hover:text-yellow-500">{item}</li>
            ))}
          </ul>
        </div>
        <button className="text-gray-500 mt-8 text-sm">Log Out</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className=" text-gray-500 text-2xl font-semibold">Welcome to Dazzling Screens!</h2>
            <p className="text-gray-500">Hi Arpan</p>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-4 py-2 w-60 shadow-sm"
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Month Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹6,782.5</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>New Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">321</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹5,995.40</p>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-r from-purple-500 to-blue-500 text-white">
            <CardHeader>
              <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹540.50</p>
            </CardContent>
          </Card>
        </div>

        {/* Graphs & Profile Section */}
        <div className="grid grid-cols-3 gap-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6D28D9" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xl mt-4 font-semibold">₹682.5</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center justify-center text-center p-6">
              <div className="bg-yellow-100 rounded-full p-3 mb-3">
                <User size={40} className="text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold">Arpan</h3>
              <p className="text-gray-500">Pitampura, Delhi</p>
              <div className="flex justify-around w-full mt-4">
                <div>
                  <p className="text-lg font-bold">28</p>
                  <p className="text-gray-500 text-sm">Theaters</p>
                </div>
                <div>
                  <p className="text-lg font-bold">643</p>
                  <p className="text-gray-500 text-sm">Orders</p>
                </div>
                <div>
                  <p className="text-lg font-bold">76</p>
                  <p className="text-gray-500 text-sm">Products</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
