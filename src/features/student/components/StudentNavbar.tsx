"use client";
import React from "react";
import { Bell, User, ChevronUp, ChevronDown, Menu } from "lucide-react";
import XbadgeIcon from "@/components/ui/icons/XbadgeIcon";
import StreakIcon from "@/components/ui/icons/StreakIcon";
import { useSidebarStore } from "../store/useSidebarStore";

export default function Navbar() {
  const { toggle } = useSidebarStore();
  return (
    <header className="bg-white sticky top-0 z-10 px-6 py-4 border-b border-gray-200">
      <nav className="flex items-center justify-between">
        <button
          className="border border-gray-200 p-2 rounded-md md:hidden cursor-pointer"
          onClick={toggle}
        >
          <Menu />
        </button>

        <h1>Practice Questions</h1>

        {/* the right menu options */}
        <div className="flex items-center gap-4">
          <button>
            <Bell />
          </button>
          <span>
            <StreakIcon />
          </span>
          <span>
            <XbadgeIcon />
          </span>
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 rounded-full p-2">
              <User />
            </span>
            <button className="cursor-pointer">
              <ChevronDown />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
