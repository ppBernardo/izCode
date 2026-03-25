import { type RefObject, useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useHeroMotion(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const el = scope.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const intro = el.querySelectorAll("[data-hero]");
      if (intro.length) {
        gsap.set(intro, { opacity: 0, y: 32 });
        gsap.to(intro, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.11,
          ease: "power3.out",
          delay: 0.08,
        });
      }

      const parallax = el.querySelector("[data-hero-parallax]");
      if (parallax) {
        gsap.to(parallax, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [scope]);
}
