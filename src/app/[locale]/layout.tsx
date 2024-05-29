import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import HeaderNav from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const rubik = Rubik({ subsets: ["latin"] });

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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: "tr" | "en" };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${rubik.className}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            className="bg-white dark:bg-slate-950 text-black dark:text-white w-full min-h-screen relative  overflow-x-hidden "
          >
            <HeaderNav />
            <main className="min-h-[calc(100vh_-_400px)]">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
