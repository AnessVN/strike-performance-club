/* Strike Performance Club | gedeelde interacties (alle pagina's) */
(function(){
"use strict";
var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var isMobile = window.matchMedia("(max-width: 900px)").matches || ("ontouchstart" in window);
gsap.registerPlugin(ScrollTrigger);

var lenis = null;
if (!reduced && typeof Lenis !== "undefined") {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(function(t){ lenis.raf(t * 1000); });
  gsap.ticker.lagSmoothing(0);
}

window.SPC = { reduced: reduced, isMobile: isMobile, lenis: lenis };

/* Smooth scroll voor ankers op dezelfde pagina */
document.querySelectorAll('a[href*="#"]').forEach(function(a){
  a.addEventListener("click", function(e){
    var url = new URL(a.getAttribute("href"), location.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    var el = document.querySelector(url.hash);
    if (!el) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: "smooth" });
  });
});

/* Nav-achtergrond na scroll */
var nav = document.getElementById("nav");
if (nav) {
  ScrollTrigger.create({
    start: 80, end: "max",
    onUpdate: function(self){ nav.classList.toggle("is-scrolled", self.scroll() > 80); }
  });
  if (window.scrollY > 80) nav.classList.add("is-scrolled");
}

/* Scroll reveals */
if (!reduced) {
  document.querySelectorAll(".reveal").forEach(function(el){
    gsap.to(el, {
      opacity: 1, y: 0, duration: .9, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true }
    });
  });
} else {
  document.querySelectorAll(".reveal").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
}

/* Custom cursor */
if (!isMobile && !reduced) {
  var cursor = document.querySelector(".cursor");
  if (cursor) {
    var cx = -100, cy = -100, tx = -100, ty = -100;
    window.addEventListener("mousemove", function(e){
      tx = e.clientX; ty = e.clientY;
      cursor.style.opacity = 1;
    }, { passive: true });
    gsap.ticker.add(function(){
      cx += (tx - cx) * .2; cy += (ty - cy) * .2;
      cursor.style.transform = "translate(" + cx + "px," + cy + "px) translate(-50%,-50%)";
    });
    document.querySelectorAll("a, button, .ba, summary").forEach(function(el){
      el.addEventListener("mouseenter", function(){ cursor.classList.add("is-active"); });
      el.addEventListener("mouseleave", function(){ cursor.classList.remove("is-active"); });
    });
  }
}
})();
