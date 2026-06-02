'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#nasil-calisir', label: 'Nasıl Çalışır' },
  { href: '#yorumlar', label: 'Yorumlar' },
  { href: '#iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <>
    {/* Backdrop — covers page + floating buttons when mobile menu is open */}
    {isMenuOpen && (
      <div
        className="fixed inset-0 bg-black/60 z-[45] lg:hidden"
        onClick={handleLinkClick}
        aria-hidden="true"
      />
    )}
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-primary/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold font-heading">
              AK
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-heading font-semibold text-sm transition-colors ${
                  isScrolled ? 'text-text' : 'text-white'
                }`}
              >
                Aynur Kazak
              </span>
              <span
                className={`text-xs transition-colors ${
                  isScrolled ? 'text-primary' : 'text-white/80'
                }`}
              >
                Uzman Diyetisyen
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-body text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? 'text-text/80' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+905388371509"
              className={`hidden sm:flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? 'text-text/80 hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
            >
              <PhoneIcon />
              <span className="hidden xl:inline">0538 837 15 09</span>
            </a>
            <a
              href="#iletisim"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-semibold font-heading rounded-full hover:bg-primary-dark transition-colors duration-200"
            >
              Randevu Al
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2.5 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-text hover:bg-background-alt'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menüyü aç/kapat"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen
              ? 'max-h-[calc(100vh-5rem)] overflow-y-auto pb-8'
              : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-4 mt-2 border border-primary/10">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-text/80 font-medium rounded-xl hover:bg-background hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="tel:+905388371509"
                className="flex items-center gap-2 px-4 py-3 text-primary font-medium rounded-xl hover:bg-background transition-colors"
              >
                <PhoneIcon />
                0538 837 15 09
              </a>
              <a
                href="#iletisim"
                onClick={handleLinkClick}
                className="flex items-center justify-center px-4 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
              >
                Randevu Al
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
