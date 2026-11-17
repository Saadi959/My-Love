import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface TopNavProps {
  onOpenDua: () => void;
}

const NAV_ITEMS = [
  { href: '#our-story', label: 'Our Story' },
  { href: '#why-you', label: 'Why You' },
  { href: '#love-notes', label: 'Love Notes' },
  { href: '#my-promise', label: 'My Promise' },
  { href: '#birthday-dua', label: 'Birthday Dua' },
] as const;

export const TopNav: React.FC<TopNavProps> = ({ onOpenDua }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDuaClick = () => {
    setMobileOpen(false);
    onOpenDua();
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[#E7DCD8] bg-[#FAF7F5]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-serif text-2xl font-semibold tracking-tight text-[#1F1719] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A3B]"
        >
          For Mona
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          aria-label="Primary sections"
          className="hidden items-center gap-7 text-sm font-medium text-[#5E4D51] md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 border-b border-transparent py-1 transition-colors duration-150 hover:border-[#9E2A3B]/50 hover:text-[#1F1719] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A3B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleDuaClick}
            className="hidden rounded-lg bg-[#9E2A3B] px-4 py-2 text-sm font-medium text-[#FAF7F5] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#7C1D2D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A3B] sm:inline-flex"
          >
            Open My Dua, Love
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E7DCD8] text-[#1F1719] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A3B]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#E7DCD8] bg-[#FAF7F5] px-6 py-4 md:hidden">
          <nav aria-label="Mobile sections" className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-sm font-medium text-[#3D2F33] hover:text-[#9E2A3B]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleDuaClick}
              className="mt-2 w-full rounded-lg bg-[#9E2A3B] px-4 py-2.5 text-sm font-medium text-[#FAF7F5] hover:bg-[#7C1D2D]"
            >
              Open My Dua, Love
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
