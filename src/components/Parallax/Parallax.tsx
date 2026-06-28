"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({
  children,
  className = "",
  speed = 0.1,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const mq = window.matchMedia("(max-width: 1024px)");

    let raf = 0;

    const update = () => {
      raf = 0;
      el.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const attach = () => {
      el.style.willChange = "transform";
      el.style.transform = "";
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
    };

    const detach = () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      el.style.willChange = "";
      el.style.transform = "";
    };

    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) detach();
      else attach();
    };

    if (!mq.matches) attach();

    mq.addEventListener("change", onChange);

    return () => {
      mq.removeEventListener("change", onChange);
      detach();
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {children}
    </div>
  );
}
