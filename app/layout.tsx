import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const kodak = localFont({src: "../public/fonts/2kodak.ttf"});

export const metadata: Metadata = {
  title: "LSPD",
  description: "LSPD IRAN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`flex flex-col  h-dvh ${kodak.className} m-5 overflow-hidden xl:overflow-auto`}
      >
        {children}
      </body>
    </html>
  );
}
