import "@/styles/globals.css";
import "@/styles/styles.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { NoScript } from "./no-script";
import { Providers } from "./providers";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Weather Noow",
  description: "Weather Noow is a weather app that shows the current weather.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={nunito.variable}>
      <body className="h-screen bg-custom-gray-800">
        <Providers>
          <NoScript />
          {children}
        </Providers>
      </body>
    </html>
  );
}
