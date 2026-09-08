"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "SafeWork", href: "/solution" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="bg-industrial-black text-white py-3 shadow-2xl border-b-4 border-brand-cyan sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-full border-2 border-brand-cyan shadow-[0_0_15px_rgba(0,203,247,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <img 
              src="/logo.jpg" 
              alt="SafeTech Solutions Logo" 
              className="object-cover w-full h-full" 
            />
          </div>
          <span className="text-xl md:text-2xl font-heading font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-brand-cyan group-hover:to-brand-yellow transition-all duration-300">
            SafeTech Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-cyan hover:after:w-full after:transition-all ${pathname === link.href ? "text-brand-cyan after:w-full" : "hover:text-brand-cyan after:w-0"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="px-6 py-2.5 bg-brand-cyan text-industrial-black font-bold rounded-full hover:bg-brand-cyan-dark hover:scale-105 hover:shadow-[0_0_15px_rgba(0,203,247,0.6)] transition-all duration-300 uppercase">
            Enquiry / Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-brand-cyan transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-industrial-black border-b-4 border-brand-yellow shadow-2xl animate-in slide-in-from-top-4 fade-in duration-300">
          <nav className="flex flex-col px-6 py-4 space-y-4 font-semibold text-lg">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 border-b border-white/10 ${pathname === link.href ? "text-brand-cyan" : "text-white hover:text-brand-cyan"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 text-center py-3 bg-brand-cyan text-industrial-black font-bold rounded-lg uppercase tracking-widest"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
