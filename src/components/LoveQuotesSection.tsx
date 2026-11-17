import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { LOVE_QUOTES, nextQuoteIndex } from '../utils/loveData';

interface LoveQuotesSectionProps {
  loveCount: number;
  onSendLove: () => void;
}

export const LoveQuotesSection: React.FC<LoveQuotesSectionProps> = ({
  loveCount,
  onSendLove,
}) => {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [burstKey, setBurstKey] = useState(0);

  const currentQuote = LOVE_QUOTES[quoteIdx] ?? LOVE_QUOTES[0];

  const handlePrev = () => {
    setQuoteIdx((prev) => nextQuoteIndex(prev, LOVE_QUOTES.length, 'prev'));
  };

  const handleNext = () => {
    setQuoteIdx((prev) => nextQuoteIndex(prev, LOVE_QUOTES.length, 'next'));
  };

  const handleLoveBurst = () => {
    setBurstKey((prev) => prev + 1);
    onSendLove();
  };

  return (
    <section id="love-notes" className="border-b border-[#E7DCD8] py-16 lg:py-24">
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-medium tracking-wide text-[#9E2A3B]">
          Words From My Heart · I Love U, Mona
        </p>
        <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#1F1719] sm:text-4xl">
          Love Notes &amp; Quiet Duas
        </h2>

        <div className="mt-10 rounded-xl border border-[#E7DCD8] bg-[#F3ECEA]/85 px-6 py-10 sm:px-12 sm:py-12">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-medium text-[#6E5C60] tabular-nums">
              Note {quoteIdx + 1} of {LOVE_QUOTES.length}{' '}
              <span className="mx-1.5" aria-hidden="true">·</span>{' '}
              {currentQuote.attribution}
            </p>

            <blockquote className="mt-6 font-serif text-2xl italic leading-relaxed text-[#1F1719] sm:text-3xl">
              {currentQuote.quote}
            </blockquote>

            <p className="mt-5 text-sm font-medium text-[#7C1D2D]">
              {currentQuote.note}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous love quote"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-[#D8C9C4] bg-[#FAF7F5] px-4 py-2 text-sm font-medium text-[#3D2F33] whitespace-nowrap transition-colors duration-150 hover:border-[#9E2A3B]/50 hover:text-[#1F1719] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A3B]"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Earlier Love Note</span>
            </button>

            <div className="relative">
              {burstKey > 0 && (
                <span
                  key={burstKey}
                  aria-hidden="true"
                  className="animate-float-up pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 font-serif text-sm font-semibold text-[#9E2A3B] whitespace-nowrap"
                >
                  I Love U
                </span>
              )}
              <button
                type="button"
                onClick={handleLoveBurst}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#9E2A3B] px-5 py-2.5 text-sm font-medium text-[#FAF7F5] whitespace-nowrap transition-colors duration-150 hover:bg-[#7C1D2D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A3B]"
              >
                <Heart className="h-4 w-4" fill="currentColor" />
                <span>Tap for I Love U, Mona</span>
                <span className="tabular-nums opacity-90">({loveCount})</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next love quote"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-[#D8C9C4] bg-[#FAF7F5] px-4 py-2 text-sm font-medium text-[#3D2F33] whitespace-nowrap transition-colors duration-150 hover:border-[#9E2A3B]/50 hover:text-[#1F1719] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A3B]"
            >
              <span>Read Next Note, Love</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
