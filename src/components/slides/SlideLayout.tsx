import { useRef, useEffect, useState, ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

const SLIDE_W = 1600;
const SLIDE_H = 900;
const MOBILE_BREAKPOINT = 768;

const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [fitScale, setFitScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement;
      if (!parent) return;

      const mobile = parent.clientWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);

      if (!mobile) {
        const scaleX = parent.clientWidth / SLIDE_W;
        const scaleY = parent.clientHeight / SLIDE_H;
        setScale(Math.min(scaleX, scaleY));
      } else {
        setFitScale(1);
      }
    };

    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current?.parentElement) {
      ro.observe(containerRef.current.parentElement);
    }
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const measureOverflow = () => {
      const el = containerRef.current;
      if (!el) return;

      const overflowXRatio = el.scrollWidth / SLIDE_W;
      const overflowYRatio = el.scrollHeight / SLIDE_H;
      const overflowRatio = Math.max(1, overflowXRatio, overflowYRatio);

      // Small safety margin so content is not clipped at the slide edge.
      const adjustedFit = overflowRatio > 1 ? (1 / overflowRatio) * 0.96 : 1;
      setFitScale(adjustedFit);
    };

    const rafId = requestAnimationFrame(measureOverflow);
    return () => cancelAnimationFrame(rafId);
  }, [children, isMobile]);

  // Mobile: render content naturally with scroll
  if (isMobile) {
    return (
      <div
        ref={containerRef}
        className={`w-full h-full overflow-y-auto slide-content slide-content-mobile font-sans ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`absolute left-1/2 top-1/2 slide-content font-sans ${className}`}
      style={{
        width: SLIDE_W,
        height: SLIDE_H,
        marginLeft: -SLIDE_W / 2,
        marginTop: -SLIDE_H / 2,
        transform: `scale(${scale * fitScale})`,
        transformOrigin: "center center",
      }}
    >
      {children}
    </div>
  );
};

export default SlideLayout;
