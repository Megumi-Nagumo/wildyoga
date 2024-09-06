'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

export default function Providers ({ children }: { children: React.ReactNode }) {
  return (
    // Dark/Light mode
    <ThemeProvider
      enableSystem
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}

      {/* toast notifications that gets displayed on the top-right of the screenwhen user sends a message  */}
      <ToasterProvider />
    </ThemeProvider>
  );
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster
      position="top-right"
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  );
}
