import React from 'react';

interface GlowingHeartProps {
  onPulseClick?: () => void;
  loveCount?: number;
}

export const GlowingHeart: React.FC<GlowingHeartProps> = ({ onPulseClick, loveCount }) => {
  return (
    <div className="inline-flex items-center gap-4">
      <button
        type="button"
        onClick={onPulseClick}
        aria-label="Send an I Love U heartbeat to Mona"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-[#9E2A3B]/20 bg-[#FAF7F5] transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A3B] active:scale-95"
      >
        <span
          aria-hidden="true"
          className="animate-heart-aura absolute inset-0 rounded-full bg-[#9E2A3B]/20 blur-md"
        />
        <span
          aria-hidden="true"
          className="animate-heart-aura absolute -inset-2 rounded-full bg-[#D98A95]/25 blur-xl"
        />
        <svg
          width="30"
          height="28"
          viewBox="0 0 32 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-heart-beat relative z-10 drop-shadow-[0_4px_14px_rgba(158,42,59,0.45)]"
        >
          <path
            d="M16 28.2C15.5 28.2 15 28 14.6 27.6C13.3 26.4 2 16.5 2 9.4C2 4.8 5.6 1.5 9.9 1.5C12.4 1.5 14.7 2.7 16 4.7C17.3 2.7 19.6 1.5 22.1 1.5C26.4 1.5 30 4.8 30 9.4C30 16.5 18.7 26.4 17.4 27.6C17 28 16.5 28.2 16 28.2Z"
            fill="url(#monaHeartGrad)"
          />
          <defs>
            <linearGradient id="monaHeartGrad" x1="2" y1="2" x2="30" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B83346" />
              <stop offset="1" stopColor="#7C1D2D" />
            </linearGradient>
          </defs>
        </svg>
      </button>

      <div className="text-left">
        <p className="text-xs font-medium tracking-wide text-[#7C1D2D]">
          I Love U, My Mona
        </p>
        <p className="text-xs text-[#6E5C60] tabular-nums">
          {loveCount !== undefined && loveCount > 0
            ? `${loveCount} heartbeats · Tap my heart, love`
            : 'Tap my glowing heart, Mona'}
        </p>
      </div>
    </div>
  );
};
