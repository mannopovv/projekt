// ---------- Mobile menu toggle ----------
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", !isHidden ? true : false);
    mobileMenu.classList.toggle("flex", isHidden);
  });
}

// ---------- Scroll reveal animation ----------
const revealItems = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

// ---------- "People online" live counter effect ----------
const onlineCountEl = document.getElementById("onlineCount");

if (onlineCountEl) {
  let base = 400000;

  const formatCount = (num) => {
    return (num / 1000).toFixed(0) + "k people online";
  };

  setInterval(() => {
    // small random fluctuation to feel "live"
    const delta = Math.floor(Math.random() * 400) - 150;
    base = Math.max(390000, base + delta);
    onlineCountEl.textContent = formatCount(base);
  }, 3500);
}