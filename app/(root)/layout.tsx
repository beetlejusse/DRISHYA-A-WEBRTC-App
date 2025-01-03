import Navbar from "@/components/Navbar";
import StreamvideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StreamvideoProvider>
      <main className="relative bg-background">
        <Navbar />
        <div className="flex">
          <section className="min-h-screen flex-1 px-6 pb-6 pt-24 transition-all duration-300 ease-in-out max-md:pb-14 sm:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-7xl">{children}</div>
          </section>
        </div>
      </main>
    </StreamvideoProvider>
  );
};

export default HomeLayout;
