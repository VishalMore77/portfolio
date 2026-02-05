import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishal More | Flutter Developer Portfolio",
  description: "Portfolio of Vishal More, a Flutter Developer specializing in cross-platform mobile and web applications.",
  keywords: ["Vishal More", "Flutter Developer", "Portfolio", "Software Engineer", "React", "Next.js"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishalmore.dev",
    title: "Vishal More | Flutter Developer Portfolio",
    description: "Portfolio of Vishal More, a Flutter Developer specializing in cross-platform mobile and web applications.",
    siteName: "Vishal More Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
