import OverlayContent from "@/components/OverlayContent";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Virtual QR - Scaning ",
  description: "Scan QR code to view 3D models in Real Life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <OverlayContent />
        {children}
      </body>
    </html>
  );
}
