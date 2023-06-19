"use client";

import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }));

  return (
    <QueryClientProvider client={client}>
      {/* <Hydrate state={dehydratedState}>{children}</Hydrate> */}
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
