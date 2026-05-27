import React from "react";
import { Bell, User, ChevronUp, ChevronDown } from "lucide-react";
import XbadgeIcon from "@/components/ui/icons/XbadgeIcon";
import StreakIcon from "@/components/ui/icons/StreakIcon";

export default function Navbar() {
  return (
    <header className="px-6 py-4 border-b border-gray-200">
      <nav className="flex items-center justify-between">
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
