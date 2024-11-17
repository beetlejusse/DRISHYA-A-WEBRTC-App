import StreamvideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamvideoProvider>{children}</StreamvideoProvider>
    </main>
  );
};

export default RootLayout;
