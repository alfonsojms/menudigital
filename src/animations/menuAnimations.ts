import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export function initMenuAnimations() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Scale up and fade out the logo and title wrapper
  gsap.to("#hero-content", {
    scrollTrigger: {
      trigger: "#cover-trigger-area",
      start: "top top",
      end: "bottom top",
      scrub: 0.5, // Numeric scrub smooths jitter on mobile touch
    },
    scale: isMobile ? 1 : 1.6, // Disables upscaling on mobile to avoid iOS Safari repaint lag
    opacity: 0,
    ease: "none"
  });

  // Toggle cover page visibility to prevent it from peeking through on mobile scroll lag
  ScrollTrigger.create({
    trigger: "#cover-trigger-area",
    start: "bottom top",
    onEnter: () => {
      gsap.set("#cover-page", { visibility: "hidden" });
    },
    onLeaveBack: () => {
      gsap.set("#cover-page", { visibility: "visible" });
    }
  });



  // Scale down the scroll indicator quickly
  gsap.to("#scroll-indicator", {
    scrollTrigger: {
      trigger: "#cover-trigger-area",
      start: "top top",
      end: "15% top",
      scrub: true,
    },
    scale: 0.2,
    opacity: 0,
    ease: "power1.in"
  });

  // 2. Category Header reveal animations (fade in + slide up)
  const reveals = document.querySelectorAll(".gs-reveal");
  reveals.forEach(reveal => {
    gsap.from(reveal, {
      scrollTrigger: {
        trigger: reveal,
        start: "top 90%",
      },
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  });

  // 3. Staggered reveal for dishes in the Editorial view
  const menuSections = document.querySelectorAll(".menu-section");
  menuSections.forEach(section => {
    const dishes = section.querySelectorAll(".gs-dish");
    if (dishes.length > 0) {
      gsap.from(dishes, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power2.out"
      });
    }
  });
}
