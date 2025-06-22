import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { Analytics } from "@vercel/analytics/next"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DRISHYA - Modern Video Conferencing",
  description: "Experience seamless video conferencing with DRISHYA",
  icons: {
    icon: [`/app-icons/favicon.ico?v=4`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <ClerkProvider
        appearance={{
          variables: {
            colorText: "#E0E0E0",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252836",
            colorInputText: "#FFFFFF",
          },
        }}
      >
        <body
          className={`${spaceGrotesk.className} bg-dark-2 text-white antialiased`}
        >
          <Analytics />
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
