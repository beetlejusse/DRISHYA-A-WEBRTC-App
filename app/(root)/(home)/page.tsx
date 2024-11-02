"use client";
import  { useState, useEffect } from "react";
import { useSession } from "@clerk/nextjs";
import quotesy from "quotesy";
import { MeetingTypeLists } from "@/components/MeetingTypeLists";

export default function Home() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(now);

  const { session } = useSession();
  const user = session?.user;

  // Generate random meaningful quote
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomQuote = quotesy.random();
    setQuote(`${randomQuote.text} — ${randomQuote.author}`);
  }, []);

  return (
    <div className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full bg-hero bg-cover">
        <div className="flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-tighter font-semibold text-center text-lg">
            Hello, {user?.username?.toLocaleUpperCase()}
          </h2>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-semibold text-sky-1 lg:text-2xl">{date}</p>
          </div>
          <h3 className="font-semibold text-zinc-300">{quote}</h3>
        </div>
      </div>

      <MeetingTypeLists />
    </div>
  );
}
