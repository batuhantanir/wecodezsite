import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import HeaderNav from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/lang/LanguageContext";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "we codez",
  description:
    "we codez, geliştirici ve tasarımcılardan oluşan bir şirkettir. web ve mobil uygulamalar geliştirir.",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      sizes: "32x32",
      url: "/we.svg",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "16x16",
      url: "/we.svg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/we.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          className="bg-white dark:bg-slate-950 text-black dark:text-white w-full min-h-screen relative  overflow-x-hidden "
        >
          <LanguageProvider>
            <HeaderNav />
            <main className="min-h-[calc(100vh_-_400px)]">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
