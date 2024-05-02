import type { Metadata } from "next";
import "./globals.css";
import "../public/font.css";
import { AuthProvider } from "../contexts/AuthContext";

export const metadata: Metadata = {
  title: "Insuma Puntos",
  description: "Generated by create next app",
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
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
