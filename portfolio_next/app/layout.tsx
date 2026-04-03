import { Metadata } from "next";
import "./utils_css.css";
import "./globals.css";
import { Manrope, Inter } from "next/font/google";

const manrope = Manrope({
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className} ${inter.className}`}>
      <body>{children}</body>
    </html>
  );
}
