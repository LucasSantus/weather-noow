import { fontSans } from "@/config/fonts";
import { projectConfig } from "@/config/project";
import { Providers } from "@/contexts/providers";
import clsx from "clsx";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: projectConfig.name,
    template: `%s - ${projectConfig.name}`,
  },
  description: projectConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx("h-screen bg-slate-800 dark:bg-[#101014]", fontSans.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
