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
      scrub: isMobile ? true : 0.5,
    },
    scale: 2.5,
    opacity: 0,
    ease: "none"
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
  const sections = ["#section-starters", "#section-mains"];
  sections.forEach(sectionId => {
    const section = document.querySelector(sectionId);
    if (section) {
      const dishes = section.querySelectorAll(".gs-dish");
      gsap.from(dishes, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 25,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power2.out"
      });
    }
  });


}
