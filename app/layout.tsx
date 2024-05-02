import type { Metadata } from "next";
import "./globals.css";
import "../public/font.css";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { AuthProvider } from "../contexts/AuthContext";

export const metadata: Metadata = {
  title: "Insuma Puntos",
  description: "Plataforma de premios para clientes de Insuma",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DTPWL0BQD2"
        ></Script>
        <Script id="google-analytics">
          {`  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-DTPWL0BQD2');
              `}
        </Script>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <GoogleTagManager gtmId="GTM-NPCLFNHG" />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
