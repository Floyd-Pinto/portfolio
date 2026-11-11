// Spotlight that follows the cursor
const spotlight = document.querySelector(".spotlight");
window.addEventListener("pointermove", (e) => {
  spotlight.style.setProperty("--x", `${e.clientX}px`);
  spotlight.style.setProperty("--y", `${e.clientY}px`);
});

// Highlight the nav link for the section currently in view
const links = document.querySelectorAll(".nav-link");
const sections = [...links].map((l) => document.querySelector(l.getAttribute("href")));

function updateActive() {
  const offset = window.innerHeight * 0.4;
  let current = sections[0];
  for (const s of sections) {
    if (s.getBoundingClientRect().top <= offset) current = s;
  }
  // At the very bottom of the page, the last section is active
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
    current = sections[sections.length - 1];
  }
  links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${current.id}`));
}

window.addEventListener("scroll", updateActive, { passive: true });
updateActive();
