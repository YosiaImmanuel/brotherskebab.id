import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brothers Kebab Signature – Kebab & Shawarma Terenak di Depok",
  description:
    "Nikmati kebab, shawarma, dan burger dengan rasa autentik Timur Tengah. Pesan sekarang via WhatsApp, GoFood, ShopeeFood, atau GrabFood.",
  keywords: "kebab depok, shawarma depok, brothers kebab, kebab cimanggis, shawarma enak",
  openGraph: {
    title: "Brothers Kebab Signature",
    description: "Kebab & Shawarma Terenak di Depok",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${oswald.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
