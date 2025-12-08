// GSAP Animations for Catch Falling Star Website
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  initializeAnimations();
  setupEventListeners();
  createStarfield();
  createShootingStars();
  setupCustomCursor();
  initializeScrollEffects();
  setupMobileMenu();
  animateStats();
});

// Main animation initialization
function initializeAnimations() {
  // Timeline for hero section animations
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Initial state - hide elements
  gsap.set(".hero-content > *", { opacity: 0, y: 50 });
  gsap.set("#heroPhone", { opacity: 0, scale: 0.8, rotation: 15 });
  gsap.set(".floating-star", { opacity: 0, scale: 0 });

  // Hero content animations
  tl.to(".hero-content", { opacity: 1, duration: 0.1 })
    .to(".badge", { opacity: 1, y: 0, duration: 0.8 }, 0.2)
    .to("h1", { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, 0.4)
    .to(
      "h1 .text-star-yellow",
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        textShadow: "0 0 30px rgba(251, 191, 36, 0.8)",
      },
      0.6,
    )
    .to(".hero-content p", { opacity: 1, y: 0, duration: 0.8 }, 0.8)
    .to(".hero-content .flex", { opacity: 1, y: 0, duration: 0.8 }, 1)
    .to(".hero-content .grid", { opacity: 1, y: 0, duration: 0.8 }, 1.2);

  // Phone mockup animation
  tl.to(
    "#heroPhone",
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
    },
    0.8,
  ).to(
    "#heroPhone",
    {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    },
    2,
  );

  // Floating stars animation
  gsap.to(".floating-star", {
    opacity: 0.8,
    scale: 1,
    duration: 1,
    stagger: 0.3,
    ease: "elastic.out(1, 0.3)",
    delay: 1.5,
  });

  // Individual floating animations
  gsap.to(".floating-star:nth-child(1)", {
    y: -30,
    rotation: 360,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  gsap.to(".floating-star:nth-child(2)", {
    y: -40,
    rotation: -360,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  gsap.to(".floating-star:nth-child(3)", {
    y: -25,
    rotation: 180,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  // ScrollTrigger animations for sections
  setupScrollTriggers();
}

// ScrollTrigger setup
function setupScrollTriggers() {
  // Features section
  gsap.utils.toArray(".feature-card").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 60,
      scale: 0.9,
      duration: 0.8,
      delay: index * 0.1,
      ease: "power2.out",
    });
  });

  // How to play steps
  gsap.utils.toArray(".step-item").forEach((step, index) => {
    gsap.from(step, {
      scrollTrigger: {
        trigger: step,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power2.out",
    });
  });

  // Screenshots
  gsap.utils.toArray(".screenshot-card").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.8,
      rotation: index === 0 ? -5 : 5,
      duration: 1,
      delay: index * 0.2,
      ease: "back.out(1.7)",
    });
  });

  // Section headings
  gsap.utils.toArray("section h2").forEach((heading) => {
    gsap.from(heading, {
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  });

  // Download section elements
  gsap.from("#download .btn-primary", {
    scrollTrigger: {
      trigger: "#download",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "back.out(1.7)",
  });
}

// Event listeners setup
function setupEventListeners() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: target,
          ease: "power2.inOut",
        });
      }
    });
  });

  // Button hover effects
  document.querySelectorAll(".btn-primary, .btn-secondary").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      gsap.to(this, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", function () {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Feature cards hover effects
  document.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      gsap.to(this, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", function () {
      gsap.to(this, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Play button hover effect
  const playBtn = document.querySelector(".play-btn");
  if (playBtn) {
    playBtn.addEventListener("mouseenter", function () {
      gsap.to(this, {
        scale: 1.1,
        rotation: 10,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    playBtn.addEventListener("mouseleave", function () {
      gsap.to(this, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }
}

// Create animated starfield
function createStarfield() {
  const starfield = document.getElementById("starfield");
  const starCount = window.innerWidth < 768 ? 100 : 200;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 5;

    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    starfield.appendChild(star);

    // GSAP animation for individual star
    gsap.to(star, {
      opacity: Math.random() * 0.5 + 0.5,
      scale: Math.random() * 0.5 + 0.8,
      duration: duration,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: delay,
    });
  }
}

// Create shooting stars
function createShootingStars() {
  setInterval(() => {
    if (Math.random() > 0.7) {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";

      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight * 0.5;

      shootingStar.style.left = startX + "px";
      shootingStar.style.top = startY + "px";

      document.body.appendChild(shootingStar);

      gsap.fromTo(
        shootingStar,
        {
          x: 0,
          y: 0,
          opacity: 1,
        },
        {
          x: -300 - Math.random() * 200,
          y: 200 + Math.random() * 100,
          opacity: 0,
          duration: 1 + Math.random(),
          ease: "power2.out",
          onComplete: () => shootingStar.remove(),
        },
      );
    }
  }, 3000);
}

// Custom cursor for desktop
function setupCustomCursor() {
  const cursor = document.getElementById("cursorGlow");

  if (window.innerWidth > 768 && cursor) {
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    });

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .feature-card, .btn-primary, .btn-secondary",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 2,
          backgroundColor: "rgba(251, 191, 36, 0.8)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "rgba(251, 191, 36, 0.8)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }
}

// Initialize scroll effects
function initializeScrollEffects() {
  // Progress bar
  const progressBar = document.getElementById("scrollProgress");

  // Scroll-based header transparency
  const header = document.getElementById("main-header");
  let lastScroll = 0;

  function updateHeaderStyle() {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      header.classList.remove("header-transparent");
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
      header.classList.add("header-transparent");
    }

    // Hide/show header on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      gsap.to(header, {
        y: -100,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      // Scrolling up
      gsap.to(header, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    lastScroll = currentScroll;
  }

  window.addEventListener("scroll", () => {
    const scrollPercent =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    gsap.to(progressBar, {
      width: scrollPercent + "%",
      duration: 0.1,
      ease: "none",
    });
    updateHeaderStyle();
  });

  // Initialize header style on load
  updateHeaderStyle();

  // Parallax effect for gradient overlay
  gsap.to(".gradient-overlay", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });
}

// Mobile menu setup
function setupMobileMenu() {
  const toggle = document.getElementById("mobileMenuToggle");
  const close = document.getElementById("mobileMenuClose");
  const menu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.add("active");
      gsap.fromTo(
        menu,
        { x: 100 },
        { x: 0, duration: 0.3, ease: "power2.out" },
      );
    });

    if (close) {
      close.addEventListener("click", () => {
        gsap.to(menu, {
          x: 100,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => menu.classList.remove("active"),
        });
      });
    }

    // Close menu when clicking on links
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        gsap.to(menu, {
          x: 100,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => menu.classList.remove("active"),
        });
      });
    });
  }
}

// Animate statistics numbers
function animateStats() {
  const stats = document.querySelectorAll("[data-count]");

  stats.forEach((stat) => {
    const target = parseFloat(stat.getAttribute("data-count"));
    const isDecimal = target % 1 !== 0;
    const suffix = stat.textContent.includes("K")
      ? "K+"
      : stat.textContent.includes("+")
        ? "+"
        : stat.textContent.includes("★")
          ? "★"
          : "";

    gsap.from(stat, {
      scrollTrigger: {
        trigger: stat,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      textContent: 0,
      duration: 2,
      ease: "power2.out",
      snap: { textContent: isDecimal ? 0.1 : 1 },
      onUpdate: function () {
        const current = parseFloat(this.targets()[0].textContent);
        stat.textContent = current + suffix;
      },
      onComplete: function () {
        stat.textContent = target + suffix;
      },
    });
  });
}

// Performance optimization with debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedResize = debounce(() => {
  // Refresh ScrollTrigger on resize
  ScrollTrigger.refresh();
}, 250);

window.addEventListener("resize", debouncedResize);

// Optimize scroll performance
let ticking = false;
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
}

function updateScrollEffects() {
  ticking = false;
}

// Preload critical images
function preloadImages() {
  const images = [
    "./assets/images/screenshot_startgame.png",
    "./assets/images/screenshot_gameplay_1.png",
    "./assets/images/screenshot_gameplay_2.png",
    "./assets/images/screenshot_gameover.png",
  ];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Initialize preloading
preloadImages();

// Add loading animation
window.addEventListener("load", () => {
  gsap.to("body", {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });
});
