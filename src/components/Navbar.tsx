import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/surgeonData';

interface NavbarProps {
  onOpenBooking: (preselectedService?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'border-b border-slate-200/90 bg-white/95 text-[#102A43] shadow-[0_1px_12px_rgba(16,42,67,0.06)] backdrop-blur-md'
          : 'border-b border-white/10 bg-transparent text-white'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between gap-6 px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className={`font-heading text-base font-semibold tracking-tight whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#64B5F6] sm:text-lg ${
            isScrolled || mobileMenuOpen ? 'text-[#102A43]' : 'text-white'
          }`}
        >
          Dr. P. G. Montgomery
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`group relative py-1 text-[13.5px] font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#64B5F6] ${
                  isScrolled
                    ? isActive
                      ? 'text-[#102A43]'
                      : 'text-slate-600 hover:text-[#102A43]'
                    : isActive
                      ? 'text-white'
                      : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left transition-transform duration-200 ${
                    isScrolled ? 'bg-[#102A43]' : 'bg-[#64B5F6]'
                  } ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className={`hidden sm:inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64B5F6] ${
              isScrolled || mobileMenuOpen
                ? 'bg-[#102A43] text-white hover:bg-[#1B3B5A]'
                : 'bg-[#64B5F6] text-[#0B1F33] hover:bg-[#82C4F8]'
            }`}
          >
            Book Appointment
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors xl:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64B5F6] ${
              isScrolled || mobileMenuOpen
                ? 'text-[#102A43] hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 pb-6 pt-3 text-[#102A43] shadow-lg xl:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex min-h-[44px] items-center justify-between border-b border-slate-100 text-sm font-medium transition-colors ${
                    isActive ? 'text-[#102A43] font-semibold' : 'text-slate-600 hover:text-[#102A43]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs font-medium text-[#1565C0]">Current</span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="mt-5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1B3B5A]"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
