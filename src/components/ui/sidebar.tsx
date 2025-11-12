import { Button } from "./button";
import {
  LayoutDashboard,
  CalendarCheck,
  Building2,
  TicketPercent,
  Clock3,
  CalendarRange,
  CreditCard,
  Shield,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Bookings", icon: CalendarCheck },
    { name: "Theaters", icon: Building2 },
    { name: "Coupons", icon: TicketPercent },
    { name: "Slots", icon: Clock3 },
    { name: "Schedules", icon: CalendarRange },
    { name: "Payments", icon: CreditCard },
    { name: "Security", icon: Shield },
    { name: "Settings", icon: Settings },
  ];
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mt-4 mb-8 text-black">🎬 Dazzling</h1>
        <hr className=" mb-4 text-gray-100" />

        <ul className="space-y-7 ml-7 text-gray-500">
          {menuItems.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="flex items-center gap-3 cursor-pointer hover:text-yellow-500"
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* <Button>Log Out</Button> */}
      <button className="flex items-center gap-2 text-gray-500 w-3/4 cursor-pointer hover:shadow-md duration-300 my-6 mx-3 p-2 pl-2 text-start text-sm">
        <LogOut size={18} strokeWidth={1.8} />
        <span>Log Out</span>
      </button>
    </>
  );
}
