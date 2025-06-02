"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import ProjectMenu from "./customs/project-menu";
import { ExploreDropDown } from "./Explore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full p-2 bg-inherit backdrop-blur-lg shadow-lg border-b supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mr-4 flex items-center justify-between w-full">
          <h1
            className="flex-shrink-0 flex-col mr-6 flex items-center space-x-2"
          >
            <p className="text-2xl font-extrabold text-white tracking-wider">
              DRISHYA
            </p>
            <p className="text-sm text-gray-300">A WEBRTC App</p>
          </h1>

          <div className="hidden md:block ml-10">
            <div className="flex items-baseline space-x-4">
              <Link
                href="/home"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <div className="relative" ref={dropdownRef}>
                <div
                  className="relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                >
                  Explore
                </div>

                {isDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 shadow-lg rounded-lg p-4">
                    <ExploreDropDown />
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
            </div>
          </div>

          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            Explore
          </button>

          <div className="flex flex-1 items-center justify-end space-x-4">
            <ProjectMenu />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 w-full bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <ExploreDropDown />
        </div>
      )}
    </nav>
  );
}
