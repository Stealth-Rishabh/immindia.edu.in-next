"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { MarqueeProvider } from "../context/MarqueeContext";
import { ThemeProvider } from "../context/ThemeContext";

function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MarqueeProvider>{children}</MarqueeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default Providers;
