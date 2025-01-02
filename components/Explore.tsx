"use client";

import React from "react";
import exploreLinks from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const ExploreDropDown = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 p-4 bg-purple-900 text-white rounded-lg shadow-lg">
      {exploreLinks.map((link) => {
        const isActive =
          pathname === link.route || pathname.startsWith(`${link.route}/`);

        return (
          <Link
            href={link.route}
            key={link.label}
            className={cn(
              "flex items-center gap-4 p-2 rounded-md hover:bg-purple-700",
              {
                "bg-purple-700": isActive,
              }
            )}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={24}
              height={24}
            />
            <p className="text-sm font-medium">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
};
