import React from 'react';

interface PetalConfig {
  id: number;
  leftPercent: number;
  size: number;
  durationSec: number;
  delaySec: number;
  driftPx: number;
  spinDeg: number;
  tone: 'crimson' | 'blush' | 'ivory';
}

const BASE_PETALS: readonly PetalConfig[] = [
  { id: 1, leftPercent: 4, size: 15, durationSec: 15, delaySec: -2, driftPx: 42, spinDeg: 220, tone: 'crimson' },
  { id: 2, leftPercent: 11, size: 12, durationSec: 18, delaySec: -9, driftPx: -36, spinDeg: -190, tone: 'blush' },
  { id: 3, leftPercent: 19, size: 17, durationSec: 14, delaySec: -5, driftPx: 54, spinDeg: 280, tone: 'crimson' },
  { id: 4, leftPercent: 27, size: 13, durationSec: 19, delaySec: -12, driftPx: -44, spinDeg: 170, tone: 'blush' },
  { id: 5, leftPercent: 35, size: 16, durationSec: 16, delaySec: -1, driftPx: 38, spinDeg: -240, tone: 'ivory' },
  { id: 6, leftPercent: 44, size: 14, durationSec: 17, delaySec: -7, driftPx: -28, spinDeg: 210, tone: 'crimson' },
  { id: 7, leftPercent: 53, size: 12, durationSec: 15, delaySec: -10, driftPx: 46, spinDeg: -180, tone: 'blush' },
  { id: 8, leftPercent: 62, size: 18, durationSec: 20, delaySec: -4, driftPx: -52, spinDeg: 260, tone: 'crimson' },
  { id: 9, leftPercent: 71, size: 13, durationSec: 16, delaySec: -13, driftPx: 34, spinDeg: 195, tone: 'blush' },
  { id: 10, leftPercent: 79, size: 16, durationSec: 14, delaySec: -6, driftPx: -40, spinDeg: -220, tone: 'ivory' },
  { id: 11, leftPercent: 87, size: 15, durationSec: 18, delaySec: -3, driftPx: 48, spinDeg: 245, tone: 'crimson' },
  { id: 12, leftPercent: 94, size: 12, durationSec: 15, delaySec: -11, driftPx: -32, spinDeg: -175, tone: 'blush' },
];

const EXTRA_PETALS: readonly PetalConfig[] = [
  { id: 13, leftPercent: 8, size: 16, durationSec: 11, delaySec: 0, driftPx: 55, spinDeg: 240, tone: 'crimson' },
  { id: 14, leftPercent: 23, size: 14, durationSec: 12, delaySec: -1, driftPx: -48, spinDeg: -210, tone: 'blush' },
  { id: 15, leftPercent: 39, size: 17, durationSec: 10, delaySec: -2, driftPx: 42, spinDeg: 260, tone: 'crimson' },
  { id: 16, leftPercent: 58, size: 15, durationSec: 11, delaySec: -0.5, driftPx: -38, spinDeg: -250, tone: 'blush' },
  { id: 17, leftPercent: 75, size: 16, durationSec: 12, delaySec: -1.5, driftPx: 50, spinDeg: 200, tone: 'crimson' },
  { id: 18, leftPercent: 90, size: 14, durationSec: 10, delaySec: -2.5, driftPx: -42, spinDeg: -190, tone: 'blush' },
];

function getPetalFill(tone: PetalConfig['tone']): string {
  switch (tone) {
    case 'crimson':
      return '#9E2A3B';
    case 'blush':
      return '#D98A95';
    case 'ivory':
      return '#E7C5C8';
  }
}

interface FallingPetalsProps {
  celebrating?: boolean;
}

export const FallingPetals: React.FC<FallingPetalsProps> = ({ celebrating = false }) => {
  const petals = celebrating ? [...BASE_PETALS, ...EXTRA_PETALS] : BASE_PETALS;

  return (
    <div
      aria-hidden="true"
      data-testid="falling-petals"
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      {petals.map((petal) => {
        const style = {
          left: `${petal.leftPercent}%`,
          top: '-48px',
          '--petal-duration': `${petal.durationSec}s`,
          '--petal-delay': `${petal.delaySec}s`,
          '--petal-drift': `${petal.driftPx}px`,
          '--petal-spin': `${petal.spinDeg}deg`,
        } as React.CSSProperties;

        return (
          <div key={petal.id} style={style} className="animate-petal absolute">
            <svg
              width={petal.size}
              height={petal.size * 1.25}
              viewBox="0 0 24 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-45"
            >
              <path
                d="M12 2C17.5 6.5 22 12.2 21.5 18.8C21 24.4 16.8 28.5 12 28.5C7.2 28.5 3 24.4 2.5 18.8C2 12.2 6.5 6.5 12 2Z"
                fill={getPetalFill(petal.tone)}
              />
              <path
                d="M12 4.5C14.8 9.2 15.8 14.8 14.5 23.5"
                stroke="#FAF7F5"
                strokeOpacity="0.35"
                strokeWidth="0.9"
                strokeLinecap="round"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};
