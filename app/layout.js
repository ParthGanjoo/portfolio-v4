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
  description:
    "I’m Parth Ganjoo, a 21 year old Computer Science and Design student at IIIT Delhi. I am a product designer, developer and photographer.",
  metadataBase: new URL("https://parthganjoo.vercel.app"),
  openGraph: {
    title: "Parth Ganjoo",
    description:
      "Designing products, building experiences, and capturing wildlife.",
    url: "https://parthganjoo.vercel.app",
    siteName: "Parth Ganjoo",
    images: [
      {
        url: "/MetaPhoto.JPG", // Ensure this is inside the /public folder
        width: 1200,
        height: 630,
        alt: "Parth Ganjoo Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Ganjoo",
    description:
      "Product designer and CS + Design student at IIIT Delhi. Designing, building, and photographing the world around me.",
    images: ["/MetaPhoto.JPG"],
  },
  alternates: {
    canonical: "https://parthganjoo.vercel.app",
  },
  other: {
    "theme-color": "#ffffff",
    "twitter:creator": "@yourhandle", // Optional: put your X handle here
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisScroller />
        {children}

        {/* ✅ JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Parth Ganjoo",
              url: "https://parthganjoo.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/parthganjoo",
                "https://www.behance.net/ganjoo",
                "https://www.instagram.com/parthganjoophotography/",
                "https://x.com/parth_ganjoo",
                "https://github.com/ParthGanjoo"
              ],
              jobTitle: "Product Designer",
              alumniOf: "IIIT Delhi",
              knowsAbout: [
                "Design",
                "Frontend Development",
                "UI/UX",
                "UI/UX Design",
                "Product Design",
                "XR",
                "Photography",
                "Wildlife Photography"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}


