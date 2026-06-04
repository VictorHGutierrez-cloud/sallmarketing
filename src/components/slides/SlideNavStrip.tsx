import type { SlideData } from "./slides";
import { cn } from "@/lib/utils";
import { slidePillAccent } from "@/components/ui/card-1";

interface SlideNavStripProps {
  slides: SlideData[];
  currentIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}

/** Mobile / tablet: horizontal topic chips */
export function SlideNavStrip({ slides, currentIndex, onSelect, className }: SlideNavStripProps) {
  return (
    <div className={cn("flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory scrollbar-thin", className)}>
      {slides.map((slide, index) => {
        const accent = slidePillAccent(index);
        const active = index === currentIndex;
        return (
          <button
            key={slide.id}
            type="button"
            onClick={() => onSelect(index)}
            className={cn(
              "snap-start shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
              accent.pill,
              active ? "ring-2 ring-primary/40 scale-[1.02] shadow-md" : "opacity-90 hover:opacity-100"
            )}
          >
            <span className="text-foreground">
              {index + 1}. {slide.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}
