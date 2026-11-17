import { useState } from 'react';
import { BirthdayDuaSection } from './components/BirthdayDuaSection';
import { FallingPetals } from './components/FallingPetals';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { LoveQuotesSection } from './components/LoveQuotesSection';
import { PromiseSection } from './components/PromiseSection';
import { SpecialReasonsSection } from './components/SpecialReasonsSection';
import { StoryTimelineSection } from './components/StoryTimelineSection';
import { TopNav } from './components/TopNav';

export default function App() {
  const [loveCount, setLoveCount] = useState<number>(19);
  const [duaRevealed, setDuaRevealed] = useState<boolean>(false);

  const handleSendLove = () => {
    setLoveCount((prev) => prev + 1);
  };

  const handleRevealDua = () => {
    setDuaRevealed(true);
    const el = document.getElementById('birthday-dua');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F5] text-[#1F1719]">
      <FallingPetals celebrating={duaRevealed} />

      <TopNav onOpenDua={handleRevealDua} />

      <main>
        <HeroSection
          loveCount={loveCount}
          onSendLove={handleSendLove}
          onJumpToDua={handleRevealDua}
        />

        <StoryTimelineSection />

        <SpecialReasonsSection onSendLove={handleSendLove} />

        <LoveQuotesSection loveCount={loveCount} onSendLove={handleSendLove} />

        <PromiseSection />

        <BirthdayDuaSection
          duaRevealed={duaRevealed}
          onRevealDua={() => setDuaRevealed(true)}
        />
      </main>

      <Footer />
    </div>
  );
}
