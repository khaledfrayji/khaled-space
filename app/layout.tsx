import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khaled Frayji - Expert Web Designer & Developer",
  description:
    "Khaled Frayji is a skilled web designer and developer specializing in creating secure and aesthetically pleasing websites. Explore my portfolio and contact me for your web design needs.",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "og:url": "khaledfrayji.com", //main url
    "og:image": "/astronaut.jpg", //when u share the link on apps the img would be displayed
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/astronaut.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
