import { HeroSplit } from "@/routes/home/blocks/HeroSplit";
import { MarqueeStrip } from "@/routes/home/blocks/MarqueeStrip";
import { StoryPanel } from "@/routes/home/blocks/StoryPanel";
import { BeforeAfterGallery } from "@/routes/home/blocks/BeforeAfterGallery";
import { ServicesPreview } from "@/routes/home/blocks/ServicesPreview";
import { PillarsGrid } from "@/routes/home/blocks/PillarsGrid";
import { FAQAccordion } from "@/routes/home/blocks/FAQAccordion";
import { ReviewsWall } from "@/routes/home/blocks/ReviewsWall";
import { DualNotes } from "@/routes/home/blocks/DualNotes";
import { ClosingCTA } from "@/routes/home/blocks/ClosingCTA";

export function HomePage() {
  return (
    <main id="main" className="min-w-0">
      <HeroSplit />
      <MarqueeStrip />
      <StoryPanel />
      <BeforeAfterGallery />
      <ServicesPreview />
      <PillarsGrid />
      <FAQAccordion />
      <ReviewsWall />
      <DualNotes />
      <ClosingCTA />
    </main>
  );
}
