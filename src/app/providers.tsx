"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactNode, useState } from "react";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false, suspense: true },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        enableColorScheme={false}
        defaultTheme="system"
        enableSystem
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
