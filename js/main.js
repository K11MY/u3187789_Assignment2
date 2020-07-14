// grab toTop button
const toTop = document.querySelector(".to-top");
// when the user scroll add button 
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
// Smooth scroll javascript
const scroll = new SmoothScroll(
  '.navbar a[href*="#"]',
  '.to-top a[href*="#"]', {
    speed: 800,
  }
);