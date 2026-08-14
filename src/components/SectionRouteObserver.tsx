"use client";

import { useEffect } from "react";

export function SectionRouteObserver() {
  useEffect(() => {
    let ticking = false;

    const checkActiveSection = () => {
      ticking = false;
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const viewportCenter = window.innerHeight * 0.4;
      let activeSectionId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= 100) {
          activeSectionId = section.id;
        }
      });

      if (activeSectionId === "hero" || !activeSectionId) {
        if (window.location.hash !== "") {
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      } else {
        const targetHash = `#${activeSectionId}`;
        if (window.location.hash !== targetHash) {
          window.history.replaceState(null, "", targetHash);
        }
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(checkActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    checkActiveSection();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}

export default SectionRouteObserver;
