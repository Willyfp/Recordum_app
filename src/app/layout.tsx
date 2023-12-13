import { ClientCookiesProvider } from "@components/CookiesProvider";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import { cookies } from "next/headers";
import LayoutWrapper from "./LayoutWrapper";

const sans = Open_Sans({ subsets: ["latin"] });

const APP_DEFAULT_TITLE = "Recordumm app";
const APP_DESCRIPTION = "Gerencie seus treinos!";

export const metadata: Metadata = {
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
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
