import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build a Jarvis-Like AI Assistant",
  description: "Comprehensive guide for creating a personalized, laptop-based AI assistant inspired by Jarvis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
