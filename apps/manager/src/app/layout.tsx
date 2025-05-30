import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { cn } from "@qt/ui";
import { ThemeProvider } from "@qt/ui/theme";
import { Toaster } from "@qt/ui/toast";

import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Quick Transitt | Console",
  description:
    "Efficiently Manage and Streamline Your Package Transportation Requests and Delivery Processes with Ease",
  openGraph: {
    title: "Quick Transitt | Manager",
    description:
      "Efficiently Manage and Streamline Your Package Transportation Requests and Delivery Processes with Ease",
    url: "https://create-t3-turbo.vercel.app",
    siteName: "Quick Transitt | Manager",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "h-screen min-h-screen bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <NuqsAdapter>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TRPCReactProvider>{props.children}</TRPCReactProvider>
            <Toaster richColors />
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
