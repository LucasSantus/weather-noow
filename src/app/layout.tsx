import { Providers } from "@/contexts/providers";
import clsx from "clsx";
import "./globals.css";

// export const metadata: Metadata = {
//   title: {
//     default: projectConfig.name,
//     template: `%s - ${projectConfig.name}`,
//   },
//   description: projectConfig.description,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={clsx("w-screen h-screen bg-[#101014]")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
