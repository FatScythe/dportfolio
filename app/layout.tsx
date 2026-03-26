import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
  src: [
    { path: "../public/font/FuturaCyrillicLight.ttf", weight: "300" },
    { path: "../public/font/FuturaCyrillicBook.ttf", weight: "400" },
    { path: "../public/font/FuturaCyrillicMedium.ttf", weight: "500" },
    { path: "../public/font/FuturaCyrillicDemi.ttf", weight: "600" },
    { path: "../public/font/FuturaCyrillicBold.ttf", weight: "700" },
    { path: "../public/font/FuturaCyrillicExtraBold.ttf", weight: "800" },
    { path: "../public/font/FuturaCyrillicHeavy.ttf", weight: "900" },
  ],
  variable: "--font-futura",
});

const calluna = localFont({
  src: [
    {
      path: "../public/font/Calluna-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/Calluna-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Calluna-It.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/Calluna-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/Calluna-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/Calluna-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-calluna",
});

export const metadata: Metadata = {
  title: "Daniel Onyenobi",
  description:
    "Versatile UI/UX Designer specializing in engaging mobile and web interfaces. Expert at transforming complex data into impactful visual stories using Figma, Adobe Suite, and PowerPoint.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${futura.variable} ${calluna.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
