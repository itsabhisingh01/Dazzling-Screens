"use client";

import { FC } from "react";
import { Menu, Search, Bell } from "lucide-react";

const Header: FC = () => {
  return (
    <header className="w-full sticky top-0 z-30 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">

      {/* LEFT SIDE: Hamburger + Search Bar */}
      <div className="flex items-center gap-4">

        {/* Hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          className="text-gray-600 hover:text-black transition"
        >
          <Menu size={22} />
        </button>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search…"
            aria-label="Search"
            className="bg-transparent outline-none px-2 text-gray-700 w-full"
          />
        </div>

      </div>

      {/* RIGHT SIDE: Notification + User Avatar + Username */}
      <div className="flex items-center gap-6">

        {/* Notification Icon */}
        <button
          type="button"
          aria-label="Notifications"
          className="text-gray-600 hover:text-black transition relative"
        >
          <Bell size={22} />

          {/* Optional notification dot */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Section */}
        <div className="flex items-center gap-3 cursor-pointer">

          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
            aria-label="Profile"
          >
            <span className="text-gray-700 font-semibold">A</span>
          </div>

          {/* User Name */}
          <span className="text-gray-800 font-semibold text-sm">
            Abhishek
          </span>
        </div>

      </div>

    </header>
  );
};

export default Header;
