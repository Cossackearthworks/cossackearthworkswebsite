import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cossack Earthworks | Professional Excavation Services",
  description: "Expert excavation, site preparation, and earthworks. Residential and commercial projects. Licensed, insured, and ready to dig.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
