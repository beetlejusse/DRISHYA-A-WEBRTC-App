import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Drishya",
  description: "A Video Confrencing and Productivity App",
  icons: {
    icon: [`/app-icons/favicon.ico?v=4`]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
          variables: {
            colorText: "#E0E0E0",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252836", 
            colorInputText: "#FFFFFF",
          },
        }}>
        <body
          className={` ${inter.className} bg-dark-2 text-white antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
