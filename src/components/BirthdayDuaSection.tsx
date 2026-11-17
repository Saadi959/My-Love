import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { BIRTHDAY_DUA_TEXT } from '../utils/loveData';

interface BirthdayDuaSectionProps {
  duaRevealed: boolean;
  onRevealDua: () => void;
}

export const BirthdayDuaSection: React.FC<BirthdayDuaSectionProps> = ({
  duaRevealed,
  onRevealDua,
}) => {
  const [ameenConfirmed, setAmeenConfirmed] = useState(false);

  return (
    <section id="birthday-dua" className="py-16 lg:py-24">
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-medium tracking-wide text-[#9E2A3B]">
          19 November 2026 · My Prayer For You
        </p>
        <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#1F1719] sm:text-4xl">
          Your Birthday Dua
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#5E4D51]">
          Before anything else on your 17th birthday, my hands are raised for your happiness, your health, and our halal destiny together.
        </p>

        <div className="mt-9">
          <p className="mb-3 font-serif text-base italic text-[#7C1D2D]">
            My love, tap gently below to open the prayer I whispered for you
          </p>
          <button
            type="button"
            onClick={onRevealDua}
            aria-expanded={duaRevealed}
            className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#9E2A3B] px-7 py-3.5 text-base font-medium text-[#FAF7F5] whitespace-nowrap transition-colors duration-150 hover:bg-[#7C1D2D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A3B]"
          >
            <Heart className="h-4 w-4" fill="currentColor" />
            <span>Click For Your Birthday Dua</span>
          </button>
        </div>

        {duaRevealed && (
          <div
            role="region"
            aria-label="Birthday Dua for Mona"
            aria-live="polite"
            className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[#D8BFC3] bg-[#F3ECEA] p-8 sm:p-11"
          >
            <p className="text-xs font-medium tracking-wide text-[#7C1D2D]">
              Ya Allah, Accept This Dua For My Mona
            </p>

            <p className="mt-5 font-serif text-2xl font-medium leading-relaxed text-[#1F1719] sm:text-3xl">
              “{BIRTHDAY_DUA_TEXT}”
            </p>

            <div className="mt-7 flex flex-col items-center gap-4 border-t border-[#E0CECF] pt-6">
              <button
                type="button"
                onClick={() => setAmeenConfirmed(true)}
                aria-pressed={ameenConfirmed}
                className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A3B] ${
                  ameenConfirmed
                    ? 'bg-[#7C1D2D] text-[#FAF7F5]'
                    : 'border border-[#9E2A3B]/40 bg-[#FAF7F5] text-[#7C1D2D] hover:bg-[#9E2A3B] hover:text-[#FAF7F5]'
                }`}
              >
                <Heart className="h-4 w-4" fill="currentColor" />
                <span>
                  {ameenConfirmed
                    ? 'Ameen, My Forever · Happy Birthday, Mona'
                    : 'Click to Say Ameen With Me, My Love'}
                </span>
              </button>

              {ameenConfirmed && (
                <p className="font-serif text-base italic text-[#5E4D51]">
                  I Love U endlessly—today, tomorrow, and until Jannah.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
