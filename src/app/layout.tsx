// app/layout.tsx
// Root layout — imports the global stylesheet once so every page gets it.
// No inline <style> blocks anywhere in the app.

import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // Site-wide defaults; page.tsx overrides these per-route.
  metadataBase: new URL("https://zehbee.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}