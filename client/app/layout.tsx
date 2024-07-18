import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobs Portal",
  description: "Platform for managing jobs and providers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen max-w-screen-xl mx-auto justify-start p-24 lg:px-64">
          {children}
        </main>
      </body>
    </html>
  );
}
