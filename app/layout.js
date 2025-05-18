import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisScroller from "./Components/UI/LenisScroller";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Parth Ganjoo",
  description: "Hi, I'm Parth — a CS + Design student at IIIT Delhi. I design digital products, develop in XR, and shoot wildlife photography.",
  openGraph: {
    title: "Parth Ganjoo | Product Designer & Developer",
    description: "Designing products, building experiences, and capturing wildlife.",
    url: "https://parthganjoo.vercel.app",
    siteName: "Parth Ganjoo",
    // images: [
    //   {
    //     url: "/og-image.png", // Place this image in your public folder
    //     width: 1200,
    //     height: 630,
    //     alt: "Parth Ganjoo Portfolio Preview",
    //   },
    // ],
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisScroller /> 
        {children}
      </body>
    </html>
  );
}

