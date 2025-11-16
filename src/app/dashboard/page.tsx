"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { User, MapPinPen } from "lucide-react";
import { JSX } from "react";
import Sidebar from "@/components/ui/sidebar";

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
      <aside className="w-64 bg-white shadow-md p-5 flex flex-col justify-between sticky top-0 h-screen">
          <Sidebar />
        </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-500">Hi Arpan</p>
            <h2 className=" text-gray-500 text-2xl font-semibold">
              Welcome to Dazzling Screens!
            </h2>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className=" rounded-lg text-gray-400 px-4 py-2 w-60 shadow-sm"
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

          <Card className="bg-yellow-400 text-transparent">
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
              <p className=" text-gray-700 text-3xl mt-0 font-semibold">
                ₹2,60,782.5
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#FACC15" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center justify-center text-center p-6">
              <div className="bg-yellow-100 rounded-full p-3 mb-3">
                <User size={40} className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold">Arpan</h3>
              <div className=" flex items-center gap-2">
                <MapPinPen size={20} className="text-gray-500 bg-gray-100 rounded-full"/>
                <span className="text-gray-500 text-sm">Pitampura, Delhi</span>
              </div>

              {/* <p className="text-gray-500">Pitampura, Delhi</p> */}
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

        {/* Third section */}
        <div className=" mt-6 flex justify-between gap-6">
          <Card className=" w-1/3">
            <CardHeader>
              <CardTitle>Booking this week</CardTitle>
              <p className=" text-gray-700 text-3xl mt-0 font-semibold">
                ₹682.5
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart barCategoryGap="30%" data={data.slice(0, 7)}>
                  <Tooltip />
                  <Bar dataKey="value" fill="#FACC15" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className=" w-1/3">
            <CardHeader>
              <p className=" text-gray-700 text-xl pl-4 pt-3 font-semibold">
                New Users
              </p>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center text-center px-6 py-1">
              <div className="flex flex-col justify-around w-full mt-0 space-y-6">
                {/* User 1 */}
                <div>
                  <div className="flex items-center gap-2">
                    <User
                      size={30}
                      className="text-black bg-gray-100 rounded-full"
                    />
                    <span className="text-md font-bold">Devashish</span>
                    <br />
                  </div>
                  <p className="text-gray-500 pl-10 text-sm text-start">
                    22 September 2020
                  </p>
                </div>

                {/* User 2 */}
                <div>
                  <div className="flex items-center gap-2">
                    <User
                      size={30}
                      className="text-black bg-gray-100 rounded-full"
                    />
                    <span className="text-md font-bold">Aman Singh</span>
                  </div>
                  <p className="text-gray-500 pl-10 text-sm text-start">
                    18 September 2020
                  </p>
                </div>

                {/* User 3 */}
                <div>
                  <div className="flex items-center gap-2">
                    <User
                      size={30}
                      className="text-black bg-gray-100 rounded-full"
                    />
                    <span className="text-md font-bold">Rahul Singh</span>
                  </div>
                  <p className="text-gray-500 pl-10 text-sm text-start">
                    22 September 2020
                  </p>
                </div>
              </div>
               {/* VIEW MORE BUTTON */}
              <p className="text-yellow-400 text-md font-semibold cursor-pointer hover:underline self-end mt-4">
                View More →
              </p>
            </CardContent>
          </Card>

          <Card className=" w-1/3 py-2">
            <CardHeader>
              <p className=" text-gray-700 text-3xl mt-0 pt-0 pl-3 font-semibold">
                22 May
              </p>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center text-center px-6 pt-3">
              <div className="flex flex-col justify-around w-full my-0 space-y-6">
                {/* User 1 */}
                <div className="flex gap-2">
                  <div className="w-1 bg-yellow-400 rounded-full"></div>
                  <div>
                    <p className="text-md text-start font-bold">Omprakash</p>
                    <p className="text-gray-500 text-sm">12:00 PM - 2:30 PM</p>
                  </div>
                </div>

                {/* User 2 */}
                <div className="flex gap-2">
                  <div className="w-1 bg-yellow-400 rounded-full"></div>
                  <div>
                    <p className="text-md text-start font-bold">Abhishek</p>
                    <p className="text-gray-500 text-sm">12:00 PM - 2:30 PM</p>
                  </div>
                </div>

                {/* User 3 */}
                <div className="flex gap-2">
                  <div className="w-1 bg-yellow-400 rounded-full"></div>
                  <div>
                    <p className="text-md text-start font-bold">Devashish</p>
                    <p className="text-gray-500 text-sm">12:00 PM - 2:30 PM</p>
                  </div>
                </div>
              </div>
              {/* VIEW MORE BUTTON */}
              <p className="text-yellow-400 text-md font-semibold cursor-pointer hover:underline self-end mt-4">
                View More →
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
