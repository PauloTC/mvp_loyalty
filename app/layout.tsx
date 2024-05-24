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
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head>
        <Script id="clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "mgl1fsng7e");
          `}
        </Script>
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
        {isProduction && <GoogleTagManager gtmId="GTM-NPCLFNHG" />}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
