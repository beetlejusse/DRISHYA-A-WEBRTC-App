"use client";

import Link from "next/link";
import React, { useState } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import ProjectMenu from "./customs/project-menu";
import { TimeDisplay } from "./customs/time-display";
import { ExploreDropDown } from "./Explore";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mr-4 flex items-center justify-between w-full">
          <Link
            href="/home"
            className="flex-shrink-0 flex-col mr-6 flex items-center space-x-2"
          >
            <p className="text-2xl font-extrabold text-white tracking-wider">
              DRISHYA
            </p>
            <p className="text-sm text-gray-300">A WEBRTC App</p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block ml-10">
            <div className="flex items-baseline space-x-4">
              <Link
                href="/home"
                className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <div
                className="relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Explore
                {isDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 shadow-lg rounded-lg p-4">
                    <ExploreDropDown />
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {/* Icon for the mobile menu (hamburger icon) */}
            <HamburgerMenuIcon className="w-6 h-6" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </button>

          {/* Right Side Icons */}
          <div className="flex flex-1 items-center justify-end space-x-4">
            <TimeDisplay />
            <ProjectMenu />
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-purple-700 text-white placeholder-purple-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-300"
                size={18}
              />
            </div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 w-full bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <ExploreDropDown />
        </div>
      )}
    </nav>
  );
}
