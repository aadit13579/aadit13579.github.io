import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Aadit Lele | Computer Engineering Student",
    template: "%s | Aadit Lele",
  },
  description:
    "Aadit Lele is a Computer Engineering student interested in computer systems, distributed systems, backend engineering, compiler design, and efficient computing.",
  keywords: [
    "Aadit Lele",
    "Computer Engineering",
    "Computer Systems",
    "Distributed Systems",
    "Backend Engineering",
    "Compiler Design",
    "Parallel Computing",
    "Machine Learning Systems",
  ],
  authors: [{ name: "Aadit Lele" }],
  creator: "Aadit Lele",
  metadataBase: new URL("https://aadit13579.github.io/"),
  openGraph: {
    title: "Aadit Lele | Computer Engineering Student",
    description:
      "Computer Engineering student exploring systems, distributed infrastructure, backend engineering, compiler design, and efficient computing.",
    url: "https://aadit13579.github.io/",
    siteName: "Aadit Lele",
    type: "website",
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
