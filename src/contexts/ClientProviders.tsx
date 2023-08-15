"use client";

import { TIME_5_MINUTES } from "@/constants/globals";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
// import "react-toastify/dist/ReactToastify.min.css";

export function ClientProviders({ children }: PropsWithChildren) {
  const client = new QueryClient({
    defaultOptions: { queries: { staleTime: TIME_5_MINUTES } },
  });

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider
        attribute="class"
        enableColorScheme={false}
        disableTransitionOnChange
        defaultTheme="system"
        enableSystem
      >
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
