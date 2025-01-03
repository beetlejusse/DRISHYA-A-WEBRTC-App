"use client";

import { useState, useEffect } from "react";
import { useSession } from "@clerk/nextjs";
import quotesy from "quotesy";
import { MeetingTypeLists } from "@/components/MeetingTypeLists";
import { Calendar, Users, Video, FileVideo } from 'lucide-react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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

  const actions = [
    {
      title: "New Meeting",
      description: "Start an Instant Meeting",
      icon: Video,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      href: "#",
    },
    {
      title: "Schedule Meeting",
      description: "Plan a Meeting",
      icon: Calendar,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      href: "#",
    },
    {
      title: "Join Meeting",
      description: "Join via invitation link",
      icon: Users,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      href: "#",
    },
    {
      title: "View Recordings",
      description: "Meeting Recordings",
      icon: FileVideo,
      color: "bg-gradient-to-br from-amber-500 to-amber-600",
      href: "#",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="flex size-full flex-col gap-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[300px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800"
      >
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="relative flex h-full flex-col justify-between p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <span className="text-xl font-semibold text-white">
                {user?.username?.[0]?.toUpperCase()}
              </span>
            </div>
            <h2 className="text-lg font-medium text-white">
              Welcome back, {user?.username?.toLocaleUpperCase()}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <h1 className="font-cal text-4xl font-bold text-white lg:text-7xl">
              {time}
            </h1>
            <p className="text-lg font-medium text-white/80 lg:text-2xl">
              {date}
            </p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl text-sm font-medium text-white/70 lg:text-base"
          >
            {quote}
          </motion.h3>
        </div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action, i) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <Card
              className={`group relative overflow-hidden ${action.color} p-6 transition-all hover:shadow-lg`}
            >
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
              <div className="relative">
                <action.icon className="mb-4 size-8 text-white" />
                <h3 className="mb-2 font-semibold text-white">{action.title}</h3>
                <p className="text-sm text-white/80">{action.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* <MeetingTypeLists /> */}
    </div>
  );
};

