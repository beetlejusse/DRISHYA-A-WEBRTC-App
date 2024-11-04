"use client";

import React from "react";
import sideBarLinks from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky lext-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-20 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-4">
        {sideBarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
          // console.log(isActive)

          return (
            // cn is used to add multiples and dynamc classnames
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg justify-start",
                {
                  "bg-blue-1": isActive
                }
              )}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
