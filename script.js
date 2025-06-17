// Hero section animation
gsap.from(".hero h2", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".hero p", {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.5,
  ease: "power3.out"
});

gsap.from(".btn", {
  duration: 0.8,
  scale: 0.8,
  opacity: 0,
  delay: 1,
  ease: "back.out(1.7)"
});

// Scroll-triggered section animation
gsap.utils.toArray("section").forEach((section, i) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});

// Button hover effect
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.1, duration: 0.2 });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1.0, duration: 0.2 });
  });
});

// Text reveal animation (if you add a class="reveal")
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "expo.out"
  });
});
