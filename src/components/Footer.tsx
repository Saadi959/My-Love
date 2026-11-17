import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 border-t border-[#E7DCD8] bg-[#FAF7F5] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-serif text-lg font-semibold text-[#1F1719]">For Mona</p>
          <p className="mt-0.5 text-xs text-[#6E5C60]">
            19 November 2026 · Born 2009 · Happy 17th Birthday, My One and Only
          </p>
        </div>

        <p className="font-serif text-sm italic text-[#7C1D2D]">
          Two years of pure love, haya, respect, and endless duas — I Love U.
        </p>
      </div>
    </footer>
  );
};
