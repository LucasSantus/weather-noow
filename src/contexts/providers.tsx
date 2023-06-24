"use client";

import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { FC, PropsWithChildren, useState } from "react";
import { ToastContainer } from "react-toastify";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [client] = useState(new QueryClient({ defaultOptions: { queries: { staleTime: 20000 } } }));

  return (
    <ThemeProvider
      attribute="class"
      enableColorScheme={false}
      disableTransitionOnChange
      defaultTheme="system"
      enableSystem
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
