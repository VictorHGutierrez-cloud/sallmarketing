import { ColorfulPillCardsGrid, slidePillAccent } from "@/components/ui/card-1";
import type { SlideData } from "./slides";

interface SlideOverviewGridProps {
  slides: SlideData[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export function SlideOverviewGrid({ slides, currentIndex, onSelect }: SlideOverviewGridProps) {
  return (
    <ColorfulPillCardsGrid
      theme="light"
      columns={1}
      className="border-0 bg-transparent shadow-none p-0"
      items={slides.map((slide, index) => ({
        name: `${index + 1}. ${slide.title}`,
        detail: slide.summary,
        logo: <span className="[&_svg]:h-5 [&_svg]:w-5">{slide.icon}</span>,
        accent: slidePillAccent(index),
        active: index === currentIndex,
        onClick: () => onSelect(index),
      }))}
    />
  );
}
