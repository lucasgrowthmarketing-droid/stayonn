"use client";
import { useEffect } from "react";
export default function Ambience() {
  useEffect(() => {
    const media = matchMedia(
      "(min-width: 701px) and (hover: hover) and (prefers-reduced-motion: no-preference)",
    );
    let dispose = () => {};
    const setup = () => {
      dispose();
      if (!media.matches) return;
      const section = document.querySelector<HTMLElement>(".os-section");
      const photo = document.querySelector<HTMLElement>(".hero-scene img");
      let frame = 0;
      const pointer = (e: PointerEvent) => {
        if (!section) return;
        const box = section.getBoundingClientRect();
        section.style.setProperty("--pointer-x", `${e.clientX - box.left}px`);
        section.style.setProperty("--pointer-y", `${e.clientY - box.top}px`);
      };
      const scroll = () => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          if (photo)
            photo.style.translate = `0 ${Math.min(16, window.scrollY * 0.025)}px`;
          frame = 0;
        });
      };
      section?.addEventListener("pointermove", pointer, { passive: true });
      window.addEventListener("scroll", scroll, { passive: true });
      dispose = () => {
        section?.removeEventListener("pointermove", pointer);
        window.removeEventListener("scroll", scroll);
        cancelAnimationFrame(frame);
        if (photo) photo.style.translate = "";
      };
    };
    setup();
    media.addEventListener("change", setup);
    return () => {
      dispose();
      media.removeEventListener("change", setup);
    };
  }, []);
  return null;
}
