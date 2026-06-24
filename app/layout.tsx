import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Do IT Consultancy",
    template: "%s | Do IT Consultancy",
  },
  description: "AI, Cloud, Software Development, BPO & IT Consulting Services",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children} 
            
  <a
  href="https://wa.me/918770283156"
  target="_blank"
  className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 p-4 shadow-lg"
>
  
</a>
 
        <a
  href="https://wa.me/918770283156"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl shadow-lg"
>
  💬
</a></body>
    </html>
  );
}
