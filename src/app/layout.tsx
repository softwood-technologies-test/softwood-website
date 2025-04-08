import type { Metadata } from "next";
import { Inter, Roboto_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: 'swap',
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: '400',
  subsets: ["latin-ext"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Softwood Textiles - Your Sourcing Partner",
  description: "Your Sourcing Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} ${pacifico.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
