import type { Metadata } from "next";
import "./globals.css";
import { MedievalSharp, Dosis } from "next/font/google";

export const metadata: Metadata = {
  title: "RPG Next",
  description: "",
};

const medievalSharp = MedievalSharp({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
});

const lato = Dosis({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
