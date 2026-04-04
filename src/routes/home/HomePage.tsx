import { HeroSplit } from "@/routes/home/blocks/HeroSplit";
import { MarqueeStrip } from "@/routes/home/blocks/MarqueeStrip";
import { StoryPanel } from "@/routes/home/blocks/StoryPanel";
import { ServicesPreview } from "@/routes/home/blocks/ServicesPreview";
import { PillarsGrid } from "@/routes/home/blocks/PillarsGrid";
import { ReviewsWall } from "@/routes/home/blocks/ReviewsWall";
import { DualNotes } from "@/routes/home/blocks/DualNotes";
import { ClosingCTA } from "@/routes/home/blocks/ClosingCTA";

export function HomePage() {
  return (
    <main id="main">
      <HeroSplit />
      <MarqueeStrip />
      <StoryPanel />
      <ServicesPreview />
      <PillarsGrid />
      <ReviewsWall />
      <DualNotes />
      <ClosingCTA />
    </main>
  );
}
