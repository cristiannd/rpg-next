import type { Metadata } from "next";
import "./globals.css";
import { MedievalSharp } from "next/font/google";

export const metadata: Metadata = {
  title: "RPG Next",
  description: "",
};

const medievalSharp = MedievalSharp({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={medievalSharp.className}>{children}</body>
    </html>
  );
}
