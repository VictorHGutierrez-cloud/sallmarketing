import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Home, Maximize, Minimize, PanelLeft } from "lucide-react";
import SlideLayout from "./SlideLayout";
import { SlideOverviewGrid } from "./SlideOverviewGrid";
import { SlideNavStrip } from "./SlideNavStrip";
import { slides } from "./slides";
import { cn } from "@/lib/utils";
import { DEFAULT_VALUES as d } from "@/utils/constants";

const bgClasses = {
  dark: "bg-primary text-primary-foreground",
  neutral: "bg-secondary text-secondary-foreground",
  light: "bg-background text-foreground",
};

const SlidePresenter = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((i: number) => {
    setCurrent(Math.max(0, Math.min(i, slides.length - 1)));
    setNavOpen(false);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, slides.length - 1));
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(() => {
    const el = cardRef.current ?? document.documentElement;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "g" || e.key === "G") {
        e.preventDefault();
        setNavOpen((v) => !v);
        return;
      }
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
      if (e.key === "Escape" && navOpen) {
        setNavOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, navOpen, toggleFullscreen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const slide = slides[current];

  return (
    <div className="proposal-font h-[100dvh] flex flex-col bg-[hsl(347,15%,97%)] text-foreground font-sans overflow-hidden">
      {/* Top bar */}
      <header className="shrink-0 flex items-center justify-between gap-3 border-b border-border bg-background px-3 md:px-5 py-3">
        <div className="flex items-center gap-2 min-w-0">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground shrink-0"
          >
            <Home size={16} />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <button
            type="button"
            onClick={() => setNavOpen(true)}
            className="lg:hidden inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-sm hover:bg-muted/50"
            aria-label="Show topics"
          >
            <PanelLeft size={16} />
            Topics
          </button>
        </div>
        <p className="text-sm font-medium truncate text-center flex-1 px-2">
          {slide.title}
        </p>
        <span className="text-sm text-muted-foreground shrink-0 tabular-nums">
          {current + 1} / {slides.length}
        </span>
      </header>

      <div className="flex flex-1 min-h-0 relative">
        {/* Desktop sidebar — topic cards */}
        <aside className="hidden lg:flex w-[min(100%,380px)] shrink-0 flex-col border-r border-border bg-background">
          <div className="p-4 border-b border-border">
            <p className="text-primary text-xs tracking-[0.25em] uppercase font-bold">Factorial HR</p>
            <p className="text-sm font-semibold mt-1 leading-snug">{d.empresa}</p>
          </div>
          <div className="flex-1 overflow-y-auto p-3">
            <SlideOverviewGrid slides={slides} currentIndex={current} onSelect={goTo} />
          </div>
        </aside>

        {/* Mobile nav drawer */}
        {navOpen && (
          <>
            <button
              type="button"
              className="lg:hidden fixed inset-0 z-40 bg-black/40"
              aria-label="Close topics"
              onClick={() => setNavOpen(false)}
            />
            <aside className="lg:hidden fixed inset-y-0 left-0 z-50 w-[min(100%,340px)] flex flex-col bg-background border-r border-border shadow-2xl">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <p className="font-semibold">Topics</p>
                <button type="button" onClick={() => setNavOpen(false)} className="text-sm text-muted-foreground">
                  Close
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-3">
                <SlideOverviewGrid slides={slides} currentIndex={current} onSelect={goTo} />
              </div>
            </aside>
          </>
        )}

        {/* Main — floating slide card */}
        <main className="flex-1 flex flex-col min-h-0 min-w-0 p-3 md:p-5">
          <SlideNavStrip
            slides={slides}
            currentIndex={current}
            onSelect={goTo}
            className="lg:hidden mb-3"
          />

          <div
            className="flex-1 flex items-center justify-center min-h-0"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={cardRef}
              className={cn(
                "relative w-full h-full max-w-[1200px] rounded-2xl border border-border/90 overflow-hidden",
                "shadow-[0_20px_60px_-12px_rgba(37,8,20,0.18)] bg-background",
                isFullscreen && "max-w-none rounded-none border-0 shadow-none h-full"
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className={cn("absolute inset-0 overflow-hidden", bgClasses[slide.bg])}
                >
                  <SlideLayout>{slide.content}</SlideLayout>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <footer className="shrink-0 flex items-center justify-center gap-3 pt-3 md:pt-4">
            <button
              type="button"
              onClick={prev}
              disabled={current === 0}
              className="inline-flex items-center gap-1 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted/40 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={18} />
              Previous
            </button>
            <button
              type="button"
              onClick={next}
              disabled={current === slides.length - 1}
              className="inline-flex items-center gap-1 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted/40 disabled:opacity-30 transition-colors"
            >
              Next
              <ChevronRight size={18} />
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background p-2.5 hover:bg-muted/40 transition-colors"
              title="Fullscreen (F)"
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default SlidePresenter;
