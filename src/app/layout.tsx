import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Script from "next/script";
import { cookies } from "next/headers";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Horizon",
    template: "%s • Horizon",
  },
  description: "A modern social platform built for meaningful connections.",
};

const themeScript = `
(() => {
  try {
    const theme = localStorage.getItem("theme");

    const isDark =
      theme === "dark" ||
      (!theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
  } catch {}
})();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get("theme")?.value;

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""} suppressHydrationWarning>
      <body
        className={`${geist.variable} bg-[var(--background)] text-[var(--foreground)] antialiased min-h-screen`}
      >
        <AppRouterCacheProvider>
          <Navbar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
