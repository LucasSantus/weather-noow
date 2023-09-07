import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import "@/styles/styles.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { NoScript } from "./no-script";
import { Providers } from "./providers";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Weather Now",
  description: "Weather Now is a weather app that shows the current weather.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={nunito.variable}>
      <body className="h-screen">
        <Providers>
          <NoScript />
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
