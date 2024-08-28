import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Senior Caucus Website",
  description: "This is the Senior Caucus Website! Welcome :3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />

      </head>
      <html lang="en">
        <body className={`${inter.className} overflow-x-hidden`}>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
