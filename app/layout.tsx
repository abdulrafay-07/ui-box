import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { MobileSidebar } from "@/components/mobile-sidebar";

import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "ui box",
  description: "copy and paste ui for designs",
};

const font = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased flex bg-gray-100`}
      >
        <Toaster />
        <aside className="hidden lg:block w-64 p-4">
          <Sidebar />
        </aside>
        <main className="flex-1">
          <MobileSidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
