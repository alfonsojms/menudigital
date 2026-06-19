import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export function initMenuAnimations() {
  // 1. Cover Page scroll-to-reveal transition
  // Scale up and fade out the L'Éphémère logo
  gsap.to("#hero-title", {
    scrollTrigger: {
      trigger: "#cover-trigger-area",
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
    },
    scale: 4.5,
    opacity: 0,
    ease: "none"
  });

  // Fade out the entire cover section to reveal the menu canvas below
  gsap.to("#cover-page", {
    scrollTrigger: {
      trigger: "#cover-trigger-area",
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
    },
    opacity: 0,
    pointerEvents: "none",
    ease: "power2.inOut"
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

  // 4. Parallax effect for floating side images
  const starterImg = document.getElementById("img-starter-1");
  if (starterImg) {
    gsap.to(starterImg, {
      scrollTrigger: {
        trigger: "#section-starters",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8
      },
      y: -80,
      ease: "none"
    });
  }

  const mainImg = document.getElementById("img-main-1");
  if (mainImg) {
    gsap.to(mainImg, {
      scrollTrigger: {
        trigger: "#section-mains",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      y: -120,
      ease: "none"
    });
  }

  // 5. Side image grayscale toggle on hover of dish rows
  const dishRows = document.querySelectorAll('.dish-row[data-image]');
  dishRows.forEach(row => {
    const imageId = row.getAttribute('data-image');
    if (imageId) {
      const imgElement = document.getElementById(`img-${imageId}`);
      
      row.addEventListener('mouseenter', () => {
        if (imgElement) {
          imgElement.classList.add('active');
        }
      });
      
      row.addEventListener('mouseleave', () => {
        if (imgElement) {
          imgElement.classList.remove('active');
        }
      });
    }
  });
}
