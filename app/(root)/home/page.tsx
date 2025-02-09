"use client";

import { useState, useEffect } from "react";
import { useSession } from "@clerk/nextjs";
import quotesy from "quotesy";
import { MeetingTypeLists } from "@/components/MeetingTypeLists";
import { motion } from "framer-motion";
import { Clock, Calendar, Quote } from 'lucide-react';

export default function Home() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(now);

  const { session } = useSession();
  const user = session?.user;

  const [quote, setQuote] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const randomQuote = quotesy.random();
    setQuote(`${randomQuote.text} — ${randomQuote.author}`);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-full w-full text-gray-100">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" p-4 sm:p-6 lg:p-8 flex flex-col"
      >
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-4 sm:mb-0"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
              <span className="text-xl font-bold text-white">
                {user?.username?.[0]?.toUpperCase()}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Welcome, {user?.username?.toLocaleUpperCase()}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-left sm:text-right"
          >
            <p className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
              <Clock className="w-6 h-6 text-purple-400" />
              {time}
            </p>
            <p className="text-base sm:text-lg text-gray-400 flex items-center gap-2 sm:justify-end">
              <Calendar className="w-5 h-5" />
              {date}
            </p>
          </motion.div>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl mb-8"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]" />
          <div className="relative p-6 sm:p-8 lg:p-10">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 mb-4" />
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-300 italic"
            >
              "{quote.split('—')[0]}"
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-2 text-right text-sm sm:text-base text-gray-400"
            >
              — {quote.split('—')[1]}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex-grow overflow-auto"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Your Meetings</h2>
          <MeetingTypeLists />
        </motion.div>
      </motion.div>
    </div>
  );
}

