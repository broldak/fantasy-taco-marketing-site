import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taco Bench - Ultimate Fantasy Sports Platform",
  description:
    "Experience the future of fantasy sports with our innovative platform. Join thousands of players competing for the ultimate championship.",
  icons: {
    icon: "/bench_taco.png",
  },
  openGraph: {
    title: "Taco Bench - Ultimate Fantasy Sports Platform",
    description:
      "Experience the future of fantasy sports with our innovative platform. Join thousands of players competing for the ultimate championship.",
    url: "https://fantasytaco.com",
    siteName: "Fantasy Taco",
    images: "/preview.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taco Bench - Ultimate Fantasy Sports Platform",
    description:
      "Experience the future of fantasy sports with our innovative platform. Join thousands of players competing for the ultimate championship.",
    images: "/preview.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider
          theme={{
            primaryColor: "teal",
            fontFamily: inter.style.fontFamily,
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
