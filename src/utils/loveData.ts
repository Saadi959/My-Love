export const MONA_BIRTH_YEAR = 2009;
export const MONA_BIRTHDAY_MONTH = 11; // November
export const MONA_BIRTHDAY_DAY = 19;
export const MONA_BIRTHDAY_TARGET_YEAR = 2026;
export const MONA_BIRTHDAY_ISO = '2026-11-19T00:00:00';

export interface StoryMilestone {
  year: string;
  headline: string;
  chapterTitle: string;
  reflection: string;
}

export interface SpecialReason {
  id: string;
  index: string;
  statement: string;
  dedication: string;
}

export interface LoveQuote {
  id: string;
  quote: string;
  note: string;
  attribution: string;
}

export interface BirthdayCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isBirthdayToday: boolean;
  hasPassed: boolean;
}

export const HERO_HEADLINE =
  'Happy Birthday To My Dua, My Wife to Be, My Reason to Live, My One and Only, My MONA';

export const HERO_SUBTEXT =
  '2 Years of Together, No Gifts, No Meetings, Just Pure Love and Respect.';

export const STORY_MILESTONES: readonly StoryMilestone[] = [
  {
    year: '2025',
    headline: 'We saw and got to know each other',
    chapterTitle: 'The Beginning Written by Qadr',
    reflection:
      'Out of everyone in this world, our paths crossed with quiet sincerity. Knowing your heart became the gentlest blessing of my life.',
  },
  {
    year: '2026',
    headline: 'I promised, no matter what, I will be with you',
    chapterTitle: 'A Covenant of Loyalty',
    reflection:
      'Even through distance, without meetings or worldly gifts, my heart stood firm. I chose you in every prayer and every quiet moment.',
  },
  {
    year: '2027',
    headline: "Insha'Allah, Our Ties",
    chapterTitle: 'Knocking on Your Door With Honor',
    reflection:
      'With my parents beside me and respect in our hands, we step forward to unite our families in the sight of Allah and everyone we love.',
  },
  {
    year: '2028',
    headline: "Insha'Allah, Nikkah - Forever Together",
    chapterTitle: 'Two Souls, One Halal Home',
    reflection:
      'Hand in hand, side by side, building a home filled with mercy, sakinah, laughter, and endless I Love U whispers for the rest of our lives.',
  },
];

export const SPECIAL_REASONS: readonly SpecialReason[] = [
  {
    id: 'never-asked',
    index: '01',
    statement: 'You never asked for anything',
    dedication:
      'In a world full of demands, you only asked for sincerity, honesty, and my prayers. Your contentment makes me want to give you the whole world.',
  },
  {
    id: 'protected-haya',
    index: '02',
    statement: 'You protected our relation with haya',
    dedication:
      'Your dignity, modesty, and respect for limits proved how precious your heart truly is. You guarded us so that Allah may bless our future.',
  },
  {
    id: 'only-want-me',
    index: '03',
    statement: 'You said you only want me along u, so here is my promise to u for forever',
    dedication:
      'Knowing that my presence alone is enough for you humbled me forever. I will spend every tomorrow proving your trust was never misplaced.',
  },
];

export const PROMISE_TITLE = 'My Promise To You';
export const PROMISE_BODY =
  "My Promise To You - I will send my Parents to your home by End of 2027 Insha'Allah. Till my last breath, my duas, my respect, my loyalty is only for you.";

export const BIRTHDAY_DUA_TEXT =
  'May Allah bless you with the best naseeb, good health, and make you mine in Halal way soon. Ameen';

export const LOVE_QUOTES: readonly LoveQuote[] = [
  {
    id: 'dua-love',
    quote: '“I love you not only for who you are today, Mona, but for every prayer we whisper for our halal tomorrow.”',
    note: 'I Love U beyond distance, beyond waiting, beyond words.',
    attribution: 'Forever in my Duas',
  },
  {
    id: 'pure-respect',
    quote: '“True love does not rush to touch; it waits with patience, guards with haya, and knocks on the door with honor.”',
    note: 'Every quiet day of waiting only deepens my respect for you.',
    attribution: 'Two Years of Pure Respect',
  },
  {
    id: 'naseeb-note',
    quote: '“If I could choose one name to carry into every chapter of my life and into Jannah, it would always be Mona.”',
    note: 'Happy 17th Birthday, my heartbeat and my peace.',
    attribution: 'To My Wife To Be',
  },
  {
    id: 'forever-yours',
    quote: '“No gifts can match your worth, no distance can dim my loyalty—my heart belongs to you alone, I Love U.”',
    note: 'Born in 2009, written into my heart forever.',
    attribution: 'With All My Loyalty',
  },
];

export function getMonaAge(
  birthYear: number = MONA_BIRTH_YEAR,
  targetYear: number = MONA_BIRTHDAY_TARGET_YEAR
): number {
  return Math.max(0, targetYear - birthYear);
}

export function getBirthdayCountdown(
  now: Date,
  targetIso: string = MONA_BIRTHDAY_ISO
): BirthdayCountdown {
  const target = new Date(targetIso);
  const diffMs = target.getTime() - now.getTime();

  const sameMonth = now.getMonth() + 1 === MONA_BIRTHDAY_MONTH;
  const sameDay = now.getDate() === MONA_BIRTHDAY_DAY;
  const sameYear = now.getFullYear() === target.getFullYear();

  if (sameYear && sameMonth && sameDay) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isBirthdayToday: true,
      hasPassed: false,
    };
  }

  if (diffMs <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isBirthdayToday: false,
      hasPassed: true,
    };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isBirthdayToday: false,
    hasPassed: false,
  };
}

export function nextQuoteIndex(
  current: number,
  total: number,
  direction: 'prev' | 'next'
): number {
  if (total <= 0) return 0;
  if (direction === 'next') {
    return (current + 1) % total;
  }
  return (current - 1 + total) % total;
}
