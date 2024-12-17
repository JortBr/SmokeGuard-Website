gsap.registerPlugin(ScrollTrigger);

gsap.from("#learn-more", {
  duration: 1,
  scale: 0.8,
  opacity: 1,
  delay: 1,
});

document.querySelector("#learn-more").addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: { y: ".features", offsetY: 50 },
    duration: 1,
  });
});

gsap.to(".parallax", {
  y: "-20%", // Parallax scroll effect
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true, // Synchroniseert met scroll
  },
});

gsap.registerPlugin(ScrollTrigger);
