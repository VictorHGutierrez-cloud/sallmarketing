import { useRef, useEffect, useState, ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

const SLIDE_W = 1920;
const SLIDE_H = 1080;

const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement;
      if (!parent) return;
      const scaleX = parent.clientWidth / SLIDE_W;
      const scaleY = parent.clientHeight / SLIDE_H;
      setScale(Math.min(scaleX, scaleY));
    };

    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current?.parentElement) {
      ro.observe(containerRef.current.parentElement);
    }
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute left-1/2 top-1/2 slide-content ${className}`}
      style={{
        width: SLIDE_W,
        height: SLIDE_H,
        marginLeft: -SLIDE_W / 2,
        marginTop: -SLIDE_H / 2,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      {children}
    </div>
  );
};

export default SlideLayout;
