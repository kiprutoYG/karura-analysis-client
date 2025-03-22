import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";



const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Karura Forest Analytics",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
