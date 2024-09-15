import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProjectForge: Learn By Doing",
  description: "Projectforg is a platform to help you master coding by building unique projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="flex min-h-screen mt-4 flex-col mx-auto px-2 items-center justify-between w-full container px-2">
          {children}
        </main>
      </body>
    </html>
  );
}
