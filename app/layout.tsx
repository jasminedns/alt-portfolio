import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jasmine Danese's Portfolio",
  description: "Come know about me and my work!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
