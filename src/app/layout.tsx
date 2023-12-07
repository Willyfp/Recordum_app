import { ClientCookiesProvider } from "@components/CookiesProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { cookies } from "next/headers";
import LayoutWrapper from "./LayoutWrapper";
import Head from "next/head";
const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recordumm app",
  description: "Gerencie seus treinos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={sans.className + "w-[100vw] h-[100vh]"}>
        <ClientCookiesProvider value={cookies().getAll()}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ClientCookiesProvider>
      </body>
    </html>
  );
}
