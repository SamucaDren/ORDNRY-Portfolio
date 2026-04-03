import { Metadata } from "next";
import "./utils_css.css";
//import "./globals.css";
import fs from "fs";
import path from "path";

export function getCriticalCSS() {
  const filePath = path.join(process.cwd(), "app/globals.css");
  return fs.readFileSync(filePath, "utf8");
}

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
  const criticalCSS = getCriticalCSS();
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
