import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  title: "ONN — Performance for people who build.",
  description:
    "Supplements. Software. Community. Um ecossistema para quem constrói o próximo passo.",
  icons: { icon: "/onn-icon.png", apple: "/onn-icon.png" },
  robots: { index: true, follow: true },
};
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
