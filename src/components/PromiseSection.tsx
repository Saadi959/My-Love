import React, { useState } from 'react';
import { Check, Flower2 } from 'lucide-react';
import { PROMISE_BODY, PROMISE_TITLE } from '../utils/loveData';

export const PromiseSection: React.FC = () => {
  const [sealed, setSealed] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="my-promise" className="border-b border-[#E7DCD8] bg-[#F3ECEA]/55 py-16 lg:py-24">
      <div className="relative z-20 mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-[#DFCFCF] bg-[#FAF7F5]">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            {/* Left image panel */}
            <div className="relative min-h-[260px] bg-[#EFE5E2] lg:col-span-5">
              {!imgFailed ? (
                <img
                  src="/src/assets/images/promise_floral_letter_1794909534511.jpg"
                  alt="Blush garden roses and white jasmine tied with ivory linen ribbon beside a cream parchment letter"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover lg:h-full"
                />
              ) : (
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center bg-gradient-to-br from-[#F3ECEA] to-[#E6D5D4] p-8 text-center">
                  <Flower2 className="h-10 w-10 text-[#9E2A3B]" strokeWidth={1.5} />
                  <p className="mt-3 font-serif text-xl italic text-[#1F1719]">
                    End of 2027 · Insha&apos;Allah
                  </p>
                </div>
              )}
            </div>

            {/* Right promise keepsake box */}
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-7">
              <div>
                <p className="text-xs font-medium tracking-wide text-[#9E2A3B]">
                  A Sacred Covenant Before Allah
                </p>

                <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#1F1719] sm:text-4xl">
                  {PROMISE_TITLE}
                </h2>

                <div className="mt-6 border-y border-[#E7DCD8] py-7">
                  <p className="font-serif text-2xl font-normal leading-relaxed text-[#1F1719] sm:text-[1.7rem]">
                    {PROMISE_BODY}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#5E4D51]">
                  You trusted me without gifts and without meetings. My honor is to honor you, protect your name, and bring my family to your home with full respect.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSealed((prev) => !prev)}
                  aria-pressed={sealed}
                  className={`inline-flex w-full max-w-full min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-center text-sm font-medium whitespace-normal transition-all duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A3B] sm:w-auto sm:whitespace-nowrap ${
                    sealed
                      ? 'border border-[#9E2A3B]/40 bg-[#F3ECEA] text-[#7C1D2D]'
                      : 'bg-[#9E2A3B] text-[#FAF7F5] hover:bg-[#7C1D2D]'
                  }`}
                >
                  {sealed && <Check className="h-4 w-4 shrink-0" />}
                  <span>
                    {sealed
                      ? "Promise Held in Both Our Hearts · Insha'Allah"
                      : "Click to Hold My Promise, Love"}
                  </span>
                </button>

                <span className="font-serif text-sm italic text-[#6E5C60]">
                  Always Yours — Forever
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
