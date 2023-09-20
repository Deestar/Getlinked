import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Unica_One } from "next/font/google";
export const metadata = {
  title: "Hackton",
  description: "A fun hackton project",
};
const clash = localFont({
  src: "./clashb.otf",
  display: "swap",
  variable: "--font-clash",
  weight: "700",
});
const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
  weight: "700",
});
const montsm = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montsm",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const unica = Unica_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unica",
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mont.variable} ${montsm.variable} ${clash.variable} ${unica.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
