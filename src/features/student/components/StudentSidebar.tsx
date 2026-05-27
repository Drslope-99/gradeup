"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LogOut,
  House,
  BookOpen,
  ClipboardList,
  Trophy,
  Settings,
  Icon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/student/dashboard", label: "Home", icon: House },
  { href: "/student/practice", label: "Practice Questions", icon: BookOpen },
  { href: "/student/exams", label: "Mock Exams", icon: ClipboardList },
  { href: "/student/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/student/settings", label: "Settings", icon: Settings },
];

export default function StudentSidebar() {
  const pathname = usePathname();

  return (
    <aside
      aria-label="student sidebar"
      className="w-full max-w-xs bg-white rounded-xl "
    >
      {/* the side bar header and logo */}
      <header className="flex gap-4 px-6 py-4 items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <div>
          <h1 className="text-heading font-semibold">Edu Pro</h1>
          <p className="text-paragraph text-sm">basic plan</p>
        </div>
        <button className="ml-auto p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
          <LogOut className="text-gray-500 w-5 h-5" />
        </button>
      </header>

      {/* the side bar navigation goes here */}
      <nav className="px-6 border-t border-gray-200 my-4">
        <ul className="flex flex-col gap-6 py-4">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-4 text-paragraph"
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-primary" : "text-gray-500"
                    }`}
                  />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
