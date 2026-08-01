"use client";

import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement | null> | RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  start?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  stagger?: number;
  scrub?: number | boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = false,
  baseOpacity = 0.15,
  baseRotation = 2,
  blurStrength = 0,
  containerClassName = '',
  textClassName = '',
  start = 'top 92%',
  rotationEnd = 'center 45%',
  wordAnimationEnd = 'center 40%',
  stagger = 0.05,
  scrub = 1
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    if (typeof children !== 'string') return children;

    const words = children.split(' ');
    return words.map((word, index) => (
      <span className="inline-block word" key={index}>
        {word}
        {index < words.length - 1 && '\u00A0'}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const rotationAnim = gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation, y: 20 },
      {
        ease: 'power1.out',
        rotate: 0,
        y: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: start,
          end: rotationEnd,
          scrub: scrub
        }
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>('.word');
    const childItems = el.querySelectorAll<HTMLElement>('.reveal-item, .card-reveal');

    const targets: HTMLElement[] =
      wordElements.length > 0
        ? Array.from(wordElements)
        : childItems.length > 0
        ? Array.from(childItems)
        : el.children.length > 0
        ? (Array.from(el.children) as HTMLElement[])
        : [el];

    const opacityAnim = gsap.fromTo(
      targets,
      { opacity: baseOpacity, y: 16, willChange: 'transform, opacity' },
      {
        ease: 'power1.out',
        opacity: 1,
        y: 0,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: start,
          end: wordAnimationEnd,
          scrub: scrub
        }
      }
    );

    let blurAnim: gsap.core.Tween | null = null;
    if (enableBlur && blurStrength > 0) {
      blurAnim = gsap.fromTo(
        targets,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'power1.out',
          filter: 'blur(0px)',
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: start,
            end: wordAnimationEnd,
            scrub: scrub
          }
        }
      );
    }

    return () => {
      rotationAnim.revert();
      opacityAnim.revert();
      if (blurAnim) blurAnim.revert();
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, start, rotationEnd, wordAnimationEnd, blurStrength, stagger, scrub]);

  return (
    <div ref={containerRef} className={`my-4 ${containerClassName}`}>
      <div className={textClassName ? textClassName : ''}>
        {splitText}
      </div>
    </div>
  );
};

export default ScrollReveal;
