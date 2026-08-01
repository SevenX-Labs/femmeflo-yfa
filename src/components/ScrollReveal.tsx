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
  rotationEnd?: string;
  wordAnimationEnd?: string;
  stagger?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  stagger = 0.05
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
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
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
      { opacity: baseOpacity, willChange: 'opacity, filter, transform' },
      {
        ease: 'none',
        opacity: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=15%',
          end: wordAnimationEnd,
          scrub: true
        }
      }
    );

    let blurAnim: gsap.core.Tween | null = null;
    if (enableBlur) {
      blurAnim = gsap.fromTo(
        targets,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=15%',
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );
    }

    return () => {
      rotationAnim.revert();
      opacityAnim.revert();
      if (blurAnim) blurAnim.revert();
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, stagger]);

  return (
    <div ref={containerRef} className={`my-4 ${containerClassName}`}>
      <div className={textClassName ? textClassName : ''}>
        {splitText}
      </div>
    </div>
  );
};

export default ScrollReveal;
