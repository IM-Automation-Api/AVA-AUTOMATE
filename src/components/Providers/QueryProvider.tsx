// src/components/Providers/QueryProvider.tsx
'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

export function QueryProvider({ children }: { children: React.ReactNode }) {
  return (

    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
