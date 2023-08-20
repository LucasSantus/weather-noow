import { ClientProviders } from "@/contexts/ClientProviders";
import { ServerProviders } from "@/contexts/ServerProviders";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { NoScript } from "./no-script";

dayjs.locale("pt-br");

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
      <body>
        <ServerProviders>
          <ClientProviders>
            <NoScript />
            {children}
          </ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}
