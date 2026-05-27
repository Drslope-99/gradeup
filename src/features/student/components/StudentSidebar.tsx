"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  House,
  BookOpen,
  ClipboardList,
  Trophy,
  Settings,
  Icon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "../store/useSidebarStore";

const navLinks = [
  { href: "/student/dashboard", label: "Home", icon: House },
  { href: "/student/practice", label: "Practice Questions", icon: BookOpen },
  { href: "/student/exams", label: "Mock Exams", icon: ClipboardList },
  { href: "/student/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/student/settings", label: "Settings", icon: Settings },
];

export default function StudentSidebar() {
  const { isOpen, close } = useSidebarStore();
  const pathname = usePathname();

  return (
    <aside
      aria-label="student sidebar"
      className={`bg-white fixed md:sticky top-0 z-40 h-screen w-72 rounded-lg flex-shrink-0 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full shadow-md"}
          md:translate-x-0  {/* ✅ always visible on lg, ignores toggle */}
        `}
    >
      {/* the side bar header and logo */}
      <header className="flex gap-4 px-6 py-4 items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <div>
          <h1 className="text-heading font-semibold">Edu Pro</h1>
          <p className="text-paragraph text-sm">basic plan</p>
        </div>
        <button
          className="md:hidden ml-auto p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
          onClick={close}
        >
          <X className="text-gray-500 w-5 h-5" />
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

// className="hidden md:flex md:flex-col sticky top-0 w-72 flex-shrink-0 bg-white rounded-xl h-screen overflow-y-auto"
