import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Aadit Lele | Computer Engineering Student",
    template: "%s | Aadit Lele",
  },
  description:
    "Aadit Lele is a Computer Engineering student interested in computer systems, distributed systems, machine learning systems, compiler design, and efficient computing.",
  authors: [{ name: "Aadit Lele" }],
  creator: "Aadit Lele",
  verification: {
    google: "TUxb5SqB29UbBr1j0PqPPMPM1Ohp9YT1Wfn8iTXi5i4",
  },
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
