import { ClientCookiesProvider } from "@components/CookiesProvider";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import { cookies } from "next/headers";
import LayoutWrapper from "./LayoutWrapper";

const sans = Open_Sans({ subsets: ["latin"] });

const APP_NAME = "Recordumm app";
const APP_DEFAULT_TITLE = "Recordumm app";
const APP_TITLE_TEMPLATE = "%s - Recordumm app";
const APP_DESCRIPTION = "Gerencie seus treinos!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
