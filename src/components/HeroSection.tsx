import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import {
  HERO_HEADLINE,
  HERO_SUBTEXT,
  MONA_BIRTH_YEAR,
  MONA_BIRTHDAY_ISO,
  getBirthdayCountdown,
  getMonaAge,
} from '../utils/loveData';
import { GlowingHeart } from './GlowingHeart';

interface HeroSectionProps {
  loveCount: number;
  onSendLove: () => void;
  onJumpToDua: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  loveCount,
  onSendLove,
  onJumpToDua,
}) => {
  const [now, setNow] = useState<Date>(() => new Date());
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const countdown = getBirthdayCountdown(now, MONA_BIRTHDAY_ISO);
  const turningAge = getMonaAge(MONA_BIRTH_YEAR, 2026);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#E7DCD8] py-14 lg:py-20"
    >
      <div className="relative z-20 mx-auto max-w-6xl px-6">
        {/* Main 2-column editorial hero split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Typography & Glowing Heart */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              {/* Quiet unboxed metadata line */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#6E5C60] tabular-nums">
                <span>19 November 2026</span>
                <span aria-hidden="true">·</span>
                <span>Born {MONA_BIRTH_YEAR}</span>
                <span aria-hidden="true">·</span>
                <span>Turning {turningAge}</span>
                <span aria-hidden="true">·</span>
                <span>2 Years of Pure Respect</span>
              </div>

              <div className="mt-6">
                <GlowingHeart onPulseClick={onSendLove} loveCount={loveCount} />
              </div>

              <h1
                style={{ textWrap: 'balance' }}
                className="mt-7 font-serif text-[clamp(2.25rem,3.9vw,3.65rem)] font-medium leading-[1.12] tracking-tight text-[#1F1719]"
              >
                {HERO_HEADLINE}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#4F3F43] sm:text-lg">
                {HERO_SUBTEXT}
              </p>
            </div>

            {/* Primary CTA row */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onJumpToDua}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#9E2A3B] px-6 py-3 text-sm font-medium text-[#FAF7F5] whitespace-nowrap transition-colors duration-150 hover:bg-[#7C1D2D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A3B]"
              >
                <span>Tap Here for My Dua, My Love</span>
              </button>

              <a
                href="#our-story"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#D8C9C4] bg-transparent px-5 py-3 text-sm font-medium text-[#3D2F33] whitespace-nowrap transition-colors duration-150 hover:border-[#9E2A3B]/50 hover:text-[#1F1719] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A3B]"
              >
                <span>Walk Through Our Story</span>
              </a>
            </div>
          </div>

          {/* Right column: Bespoke Editorial Keepsake Image */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <figure className="relative h-full min-h-[300px] overflow-hidden rounded-xl border border-[#E7DCD8] bg-[#F3ECEA]">
              {!imgFailed ? (
                <img
                  src="/src/assets/images/hero_rose_keepsake_1794909533260.jpg"
                  alt="Heirloom cream cotton envelope sealed with wax surrounded by crimson and blush rose petals in golden sunlight"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover lg:h-full"
                />
              ) : (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center bg-gradient-to-br from-[#F3ECEA] via-[#EFE3E1] to-[#E6D1D3] p-8 text-center">
                  <Heart className="h-10 w-10 text-[#9E2A3B]" strokeWidth={1.5} />
                  <p className="mt-4 font-serif text-2xl italic text-[#1F1719]">
                    For My One &amp; Only, Mona
                  </p>
                  <p className="mt-1 text-xs text-[#6E5C60]">19 · 11 · 2026</p>
                </div>
              )}
            </figure>
            <p className="mt-2.5 font-serif text-xs italic text-[#6E5C60]">
              A letter kept in duas until the day it reaches your door in halal.
            </p>
          </div>
        </div>

        {/* Full-width Birthday Countdown & Keepsake Strip below the Hero split */}
        <div
          aria-label="Birthday countdown for Mona"
          className="mt-12 grid grid-cols-2 gap-4 border-t border-[#E7DCD8] pt-8 sm:grid-cols-4 lg:gap-8"
        >
          {countdown.isBirthdayToday ? (
            <div className="col-span-2 sm:col-span-4">
              <p className="font-serif text-2xl font-medium text-[#7C1D2D]">
                Happy 17th Birthday Today, My Mona — 19 November 2026
              </p>
              <p className="mt-1 text-sm text-[#5E4D51]">
                Every prayer today begins and ends with your happiness and our halal future.
              </p>
            </div>
          ) : (
            <>
              <div className="rounded-xl border border-[#E7DCD8] bg-[#F3ECEA]/60 p-4">
                <p className="text-xs font-medium text-[#6E5C60]">Days to 19 Nov</p>
                <p className="mt-1 font-serif text-3xl font-semibold text-[#1F1719] tabular-nums">
                  {String(countdown.days).padStart(2, '0')}
                </p>
              </div>
              <div className="rounded-xl border border-[#E7DCD8] bg-[#F3ECEA]/60 p-4">
                <p className="text-xs font-medium text-[#6E5C60]">Hours</p>
                <p className="mt-1 font-serif text-3xl font-semibold text-[#1F1719] tabular-nums">
                  {String(countdown.hours).padStart(2, '0')}
                </p>
              </div>
              <div className="rounded-xl border border-[#E7DCD8] bg-[#F3ECEA]/60 p-4">
                <p className="text-xs font-medium text-[#6E5C60]">Minutes</p>
                <p className="mt-1 font-serif text-3xl font-semibold text-[#1F1719] tabular-nums">
                  {String(countdown.minutes).padStart(2, '0')}
                </p>
              </div>
              <div className="rounded-xl border border-[#E7DCD8] bg-[#F3ECEA]/60 p-4">
                <p className="text-xs font-medium text-[#6E5C60]">Seconds</p>
                <p className="mt-1 font-serif text-3xl font-semibold text-[#9E2A3B] tabular-nums">
                  {String(countdown.seconds).padStart(2, '0')}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
