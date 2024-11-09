import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomeCardsProps {
  className: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

export const CardsAtHome = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardsProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold text-white">{title}</h1>
        <p className="text-lg font-medium">{description}</p>
      </div>
    </div>
  );
};
