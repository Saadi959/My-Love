import React, { useState } from 'react';
import { STORY_MILESTONES } from '../utils/loveData';

export const StoryTimelineSection: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string>('2026');
  const activeMilestone =
    STORY_MILESTONES.find((item) => item.year === activeYear) ?? STORY_MILESTONES[0];

  return (
    <section id="our-story" className="border-b border-[#E7DCD8] py-16 lg:py-24">
      <div className="relative z-20 mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-[#9E2A3B]">
            Chapter by Chapter · Written With Patience
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#1F1719] sm:text-4xl">
            Our Story Timeline
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#5E4D51]">
            From the first day we knew each other to the day Allah unites our homes in halal—every year with you is sacred to me.
          </p>
        </div>

        {/* All 4 milestone cards always visible in DOM and clickable to inspect chapter note */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STORY_MILESTONES.map((milestone, idx) => {
            const isSelected = milestone.year === activeYear;
            return (
              <button
                key={milestone.year}
                type="button"
                onClick={() => setActiveYear(milestone.year)}
                aria-pressed={isSelected}
                className={`group flex flex-col justify-between rounded-xl border p-6 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A3B] ${
                  isSelected
                    ? 'border-[#9E2A3B] bg-[#F3ECEA]'
                    : 'border-[#E7DCD8] bg-[#FAF7F5] hover:border-[#C9B3AE] hover:bg-[#F3ECEA]/50'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-serif text-3xl font-semibold text-[#9E2A3B] tabular-nums">
                      {milestone.year}
                    </span>
                    <span className="text-xs font-medium text-[#6E5C60] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="mt-4 font-serif text-xl font-medium leading-snug text-[#1F1719]">
                    {milestone.headline}
                  </p>
                </div>

                <p className="mt-5 text-xs font-medium text-[#6E5C60] group-hover:text-[#9E2A3B]">
                  {isSelected ? 'Reading this with love' : 'Click to read my heart'}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active chapter heartfelt reflection */}
        <div
          aria-live="polite"
          className="mt-8 rounded-xl border border-[#E7DCD8] bg-[#F3ECEA]/70 p-7 sm:p-9"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-serif text-2xl font-medium text-[#1F1719]">
              {activeMilestone.year} — {activeMilestone.chapterTitle}
            </h3>
            <span className="text-xs font-medium text-[#7C1D2D]">
              I Love U, Mona
            </span>
          </div>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#3D2F33]">
            {activeMilestone.reflection}
          </p>
        </div>
      </div>
    </section>
  );
};
