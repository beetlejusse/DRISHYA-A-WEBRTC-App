import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card } from "./ui/card";

interface HomeCardsProps {
  className: string;
  img: React.ElementType;
  title: string;
  description: string;
  handleClick: () => void;
  i: number;
}

export const CardsAtHome = ({
  className,
  img: Icon,
  title,
  description,
  handleClick,
  i,
}: HomeCardsProps) => {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + i * 0.1  }}
      className={cn(
        "rounded-[14px] group relative overflow-hidden ${action.color} p-6 transition-all hover:shadow-lg px-4 py-6 flex flex-col justify-between w-full cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="relative inset-0 bg-grid-white/5">
        <div className="flex-center size-12 rounded-[10px]">
          <Icon className="mb-4 size-8 text-white"/>
        </div>
        <div className="relative">
          <h1 className="mb-2 text-2xl font-extrabold text-white">{title}</h1>
          <p className="text-white/80 text-lg font-medium">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};