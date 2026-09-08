import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SafeTech Solutions | Interactive Safety Training for Logistics",
  description: "SafeWork by SafeTech Solutions is a custom-built, interactive health & safety training platform designed specifically for the logistics and warehousing sector. Turn compliance into a habit.",
  keywords: ["Safety Training", "Logistics", "Warehousing", "Health & Safety", "Compliance", "SafeWork"],
  openGraph: {
    title: "SafeTech Solutions | SafeWork Platform",
    description: "Interactive health & safety training designed for the real world.",
    type: "website",
    locale: "en_GB",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoCondensed.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-industrial-light text-industrial-black">
        <Header />

        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <footer className="bg-industrial-black text-white py-16 mt-16 border-t-4 border-brand-yellow relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img src="/logo.jpg" alt="SafeTech Logo" className="h-16 w-16 rounded-full border-2 border-brand-cyan" />
                <span className="text-2xl font-heading font-bold tracking-tight">SafeTech Solutions</span>
              </div>
              <p className="text-gray-400 mt-2 leading-relaxed max-w-sm">Turning Clicks Into Clients. Making safety training a habit built through good design, not just a policy enforced through paperwork.</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider text-brand-cyan">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/" className="hover:text-brand-yellow transition-colors hover:pl-2">Home</Link></li>
                <li><Link href="/about" className="hover:text-brand-yellow transition-colors hover:pl-2">Meet the Team</Link></li>
                <li><Link href="/solution" className="hover:text-brand-yellow transition-colors hover:pl-2">SafeWork Modules</Link></li>
                <li><Link href="/contact" className="hover:text-brand-yellow transition-colors hover:pl-2">Contact & Feedback</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider text-brand-cyan">Contact</h3>
              <p className="text-gray-400">FLAT 12 WILDING HOUSE</p>
              <p className="text-gray-400">WICK ROAD, LONDON HACKNEY</p>
              <p className="text-gray-400 mb-4">E9 SAU</p>
              <a href="mailto:safetechsolutions02@gmail.com" className="text-brand-yellow hover:text-white transition-colors font-semibold">safetechsolutions02@gmail.com</a>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm relative z-10">
            &copy; {new Date().getFullYear()} SafeTech Solutions. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
