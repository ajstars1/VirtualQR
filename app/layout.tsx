import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Virtual QR",
  description: "Feel the magic of AR with Virtual QR ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`homeScreenBody`}>{children}</body>
    </html>
  );
}
