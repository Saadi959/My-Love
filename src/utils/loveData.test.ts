import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BIRTHDAY_DUA_TEXT,
  HERO_HEADLINE,
  HERO_SUBTEXT,
  LOVE_QUOTES,
  PROMISE_BODY,
  SPECIAL_REASONS,
  STORY_MILESTONES,
  getBirthdayCountdown,
  getMonaAge,
  nextQuoteIndex,
} from './loveData';

test('calculates Mona turning 17 in 2026 from birth year 2009', () => {
  assert.equal(getMonaAge(2009, 2026), 17);
});

test('computes exact birthday countdown before 19-11-2026', () => {
  const now = new Date('2026-11-17T02:00:00');
  const countdown = getBirthdayCountdown(now, '2026-11-19T00:00:00');
  assert.equal(countdown.days, 1);
  assert.equal(countdown.hours, 22);
  assert.equal(countdown.minutes, 0);
  assert.equal(countdown.seconds, 0);
  assert.equal(countdown.isBirthdayToday, false);
  assert.equal(countdown.hasPassed, false);
});

test('detects birthday day on 19-11-2026', () => {
  const onBirthday = new Date('2026-11-19T14:30:00');
  const countdown = getBirthdayCountdown(onBirthday, '2026-11-19T00:00:00');
  assert.equal(countdown.isBirthdayToday, true);
  assert.equal(countdown.days, 0);
});

test('cycles love quote indices cleanly in both directions', () => {
  assert.equal(nextQuoteIndex(0, LOVE_QUOTES.length, 'next'), 1);
  assert.equal(nextQuoteIndex(LOVE_QUOTES.length - 1, LOVE_QUOTES.length, 'next'), 0);
  assert.equal(nextQuoteIndex(0, LOVE_QUOTES.length, 'prev'), LOVE_QUOTES.length - 1);
});

test('preserves all required exact phrases for Mona', () => {
  assert.match(HERO_HEADLINE, /Happy Birthday To My Dua, My Wife to Be, My Reason to Live, My One and Only, My MONA/);
  assert.equal(
    HERO_SUBTEXT,
    '2 Years of Together, No Gifts, No Meetings, Just Pure Love and Respect.'
  );
  assert.deepEqual(
    STORY_MILESTONES.map((m) => `${m.year}: ${m.headline}`),
    [
      '2025: We saw and got to know each other',
      '2026: I promised, no matter what, I will be with you',
      "2027: Insha'Allah, Our Ties",
      "2028: Insha'Allah, Nikkah - Forever Together",
    ]
  );
  assert.deepEqual(
    SPECIAL_REASONS.map((r) => r.statement),
    [
      'You never asked for anything',
      'You protected our relation with haya',
      'You said you only want me along u, so here is my promise to u for forever',
    ]
  );
  assert.equal(
    PROMISE_BODY,
    "My Promise To You - I will send my Parents to your home by End of 2027 Insha'Allah. Till my last breath, my duas, my respect, my loyalty is only for you."
  );
  assert.equal(
    BIRTHDAY_DUA_TEXT,
    'May Allah bless you with the best naseeb, good health, and make you mine in Halal way soon. Ameen'
  );
});
