import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import "./globals.css";
import { Sidebar } from "@/components/sidebar";

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
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
