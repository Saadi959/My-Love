import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { SPECIAL_REASONS } from '../utils/loveData';

interface SpecialReasonsSectionProps {
  onSendLove: () => void;
}

export const SpecialReasonsSection: React.FC<SpecialReasonsSectionProps> = ({
  onSendLove,
}) => {
  const [cherishedIds, setCherishedIds] = useState<Record<string, boolean>>({});

  const toggleCherish = (id: string) => {
    setCherishedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    onSendLove();
  };

  return (
    <section id="why-you" className="border-b border-[#E7DCD8] bg-[#F3ECEA]/55 py-16 lg:py-24">
      <div className="relative z-20 mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-[#9E2A3B]">
            Three Truths From My Heart
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#1F1719] sm:text-4xl">
            Why You Are Special
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#5E4D51]">
            What makes you unforgettable is not anything loud—it is your quiet grace, your haya, and the purity of how you love me.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SPECIAL_REASONS.map((reason) => {
            const cherished = Boolean(cherishedIds[reason.id]);
            return (
              <article
                key={reason.id}
                className="flex flex-col justify-between rounded-xl border border-[#E7DCD8] bg-[#FAF7F5] p-7"
              >
                <div>
                  <span className="font-serif text-sm font-medium text-[#9E2A3B] tabular-nums">
                    {reason.index}
                  </span>

                  <h3 className="mt-4 font-serif text-2xl font-medium leading-snug text-[#1F1719]">
                    “{reason.statement}”
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#5E4D51]">
                    {reason.dedication}
                  </p>
                </div>

                <div className="mt-7 border-t border-[#E7DCD8] pt-4">
                  <button
                    type="button"
                    onClick={() => toggleCherish(reason.id)}
                    aria-pressed={cherished}
                    className={`inline-flex min-h-[40px] items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A3B] ${
                      cherished
                        ? 'bg-[#9E2A3B] text-[#FAF7F5]'
                        : 'bg-[#F3ECEA] text-[#5E4D51] hover:bg-[#E8DBD7] hover:text-[#1F1719]'
                    }`}
                  >
                    <Heart
                      className="h-3.5 w-3.5"
                      fill={cherished ? 'currentColor' : 'none'}
                    />
                    <span>
                      {cherished ? 'You Hold My Heart Forever' : 'Click If You Felt This, Love'}
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
