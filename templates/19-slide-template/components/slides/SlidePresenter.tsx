import { useState, useEffect, useCallback } from "react";
import { Maximize, Minimize, ChevronLeft, ChevronRight } from "lucide-react";
import SlideLayout from "./SlideLayout";
import { slides } from "./slides";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const bgClasses = {
  dark: "bg-primary text-primary-foreground",
  neutral: "bg-secondary text-secondary-foreground",
  light: "bg-background text-foreground",
};

const SlidePresenter = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    setSidebarCollapsed(isMobile);
  }, [isMobile]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
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
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleFullscreen]);

  const activeSlide = slides[activeIndex];

  return (
    <div className="h-screen w-screen bg-primary overflow-hidden flex" style={{ "--sidebar-bg": "hsl(347, 80%, 12%)" } as React.CSSProperties}>
      {/* Mobile overlay backdrop */}
      {isMobile && !sidebarCollapsed && (
        <div className="fixed inset-0 z-30 bg-black/50" onClick={() => setSidebarCollapsed(true)} />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "flex flex-col border-r border-white/10 transition-all duration-300 overflow-hidden z-40",
          isMobile ? "fixed top-0 left-0 h-full" : "shrink-0",
          sidebarCollapsed ? "w-0" : "w-64"
        )}
        style={{ backgroundColor: "hsl(347, 80%, 12%)" }}
      >
        {/* Sidebar header */}
        <div className="shrink-0 px-5 py-4 border-b border-primary-foreground/10">
          <h1 className="text-sm font-bold text-white tracking-wide uppercase">
            FACTORIAL RH
          </h1>
          <p className="text-xs text-primary-foreground/40 mt-0.5">
            {"\n"}
          </p>
        </div>

        {/* Slide list */}
        <div className="flex-1 overflow-y-auto py-2 scrollbar-thin">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => { setActiveIndex(index); if (isMobile) setSidebarCollapsed(true); }}
                className={cn(
                  "w-full text-left px-4 py-2.5 flex items-center gap-3 transition-all duration-200 group",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                <div
                  className={cn(
                    "w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors",
                    isActive ? "bg-white/15 text-white" : "bg-white/5 text-white/50"
                  )}
                >
                  {slide.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <span className={cn(
                    "text-xs font-bold truncate block text-white",
                    isActive ? "text-white" : "text-white/80 group-hover:text-white"
                  )}>
                    {slide.title}
                  </span>
                </div>
                <span className={cn(
                  "text-[10px] shrink-0 tabular-nums font-bold",
                  isActive ? "text-white/60" : "text-white/40"
                )}>
                  {index + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sidebar footer */}
        <div className="shrink-0 px-4 py-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-[10px] text-white/50 tabular-nums font-bold">
            {activeIndex + 1} / {slides.length}
          </span>
          <button
            onClick={toggleFullscreen}
            className="p-1.5 text-white/50 hover:text-white transition-colors"
            title="Fullscreen (F)"
          >
            {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
          </button>
        </div>
      </div>

      {/* Main slide area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Collapse/expand sidebar toggle */}
        <button
          onClick={() => setSidebarCollapsed((v) => !v)}
          className="absolute left-2 top-2 z-20 p-1.5 rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          title={sidebarCollapsed ? "Mostrar menu" : "Esconder menu"}
        >
          {sidebarCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* Slide content */}
        <div
          className={cn("flex-1 relative overflow-hidden", bgClasses[activeSlide.bg])}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            (e.currentTarget as any)._touchStartX = touch.clientX;
          }}
          onTouchEnd={(e) => {
            const startX = (e.currentTarget as any)._touchStartX;
            if (startX == null) return;
            const diff = e.changedTouches[0].clientX - startX;
            if (Math.abs(diff) > 50) {
              if (diff < 0) setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
              else setActiveIndex((prev) => Math.max(prev - 1, 0));
            }
          }}
        >
          <SlideLayout key={activeIndex}>{activeSlide.content}</SlideLayout>
        </div>

        {/* Bottom nav bar */}
        <div className="shrink-0 h-10 bg-primary border-t border-primary-foreground/10 flex items-center justify-center gap-4">
          <button
            onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
            disabled={activeIndex === 0}
            className="p-1 text-primary-foreground/40 hover:text-primary-foreground disabled:opacity-20 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs text-primary-foreground/40 tabular-nums min-w-[60px] text-center">
            {activeIndex + 1} / {slides.length}
          </span>
          <button
            onClick={() => setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1))}
            disabled={activeIndex === slides.length - 1}
            className="p-1 text-primary-foreground/40 hover:text-primary-foreground disabled:opacity-20 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlidePresenter;
