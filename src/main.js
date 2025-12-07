// Enhanced background animation system
document.addEventListener('DOMContentLoaded', function() {
  createEnhancedStars();
  createNebulaEffects();
  createShootingStars();
  setupMobileMenu();
  setupVideoModal();
  setupScrollAnimations();
  setupParallaxEffects();
  setupCursorEffect();
});

// Create enhanced multi-layer star system
function createEnhancedStars() {
  const starsContainer = document.getElementById('stars-container');
  const starCount = window.innerWidth < 768 ? 150 : 300;

  // Clear existing stars
  starsContainer.innerHTML = '';

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    const layer = Math.floor(Math.random() * 3); // 3 layers of depth
    const size = layer === 0 ? Math.random() * 2 + 0.5 :
                 layer === 1 ? Math.random() * 3 + 1 :
                               Math.random() * 4 + 2;

    // Position randomly
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    // Different colors based on layer
    const colors = ['#ffd700', '#00d9ff', '#ff6b9d', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Animation properties
    const delay = Math.random() * 8;
    const duration = layer === 0 ? 4 : layer === 1 ? 6 : 8;

    // Apply styles with depth layers
    star.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background-color: ${color};
      border-radius: 50%;
      left: ${posX}%;
      top: ${posY}%;
      opacity: ${layer === 0 ? 0.8 : layer === 1 ? 0.6 : 0.4};
      animation: twinkle ${duration}s ease-in-out infinite;
      animation-delay: ${delay}s;
      box-shadow: 0 0 ${size * 2}px ${color};
      z-index: ${3 - layer};
    `;

    starsContainer.appendChild(star);
  }
}

// Create nebula cloud effects
function createNebulaEffects() {
  const nebulaContainer = document.createElement('div');
  nebulaContainer.className = 'fixed inset-0 z-0 pointer-events-none';
  nebulaContainer.style.cssText = `
    background: radial-gradient(ellipse at 20% 30%, rgba(255, 107, 157, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 70%, rgba(0, 217, 255, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, rgba(255, 210, 63, 0.05) 0%, transparent 60%);
    animation: nebula-drift 60s ease-in-out infinite;
  `;

  document.body.insertBefore(nebulaContainer, document.body.firstChild);
}

// Create periodic shooting stars
function createShootingStars() {
  setInterval(() => {
    if (Math.random() > 0.7) { // 30% chance every interval
      const shootingStar = document.createElement('div');
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight * 0.5;

      shootingStar.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #ffffff, #00d9ff);
        border-radius: 50%;
        left: ${startX}px;
        top: ${startY}px;
        z-index: 1;
        animation: shooting-star 1s linear-out;
        box-shadow: 0 0 10px #00d9ff;
      `;

      // Create tail effect
      const tail = document.createElement('div');
      tail.style.cssText = `
        position: absolute;
        width: 100px;
        height: 1px;
        background: linear-gradient(90deg, #00d9ff, transparent);
        left: -100px;
        top: 50%;
        transform: translateY(-50%);
      `;

      shootingStar.appendChild(tail);
      document.body.appendChild(shootingStar);

      // Remove after animation
      setTimeout(() => {
        shootingStar.remove();
      }, 1000);
    }
  }, 3000);
}

// Enhanced scroll animations with intersection observer
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';

          // Add special animation for cards
          if (entry.target.classList.contains('card')) {
            entry.target.style.animation = 'card-reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          }
        }, index * 100); // Stagger animations
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.card, h2, h3').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Enhanced parallax effects
function setupParallaxEffects() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(scrollY * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });

    // Enhanced stars parallax
    const starsContainer = document.getElementById('stars-container');
    if (starsContainer) {
      const depth1 = scrollY * 0.2;
      const depth2 = scrollY * 0.5;
      const depth3 = scrollY * 0.8;

      starsContainer.style.transform = `translateY(${depth1}px)`;
    }
  });
}

// Custom cursor effect (desktop only)
function setupCursorEffect() {
  if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-6 h-6 rounded-full pointer-events-none z-50 hidden md:block';
    cursor.style.cssText = `
      background: radial-gradient(circle, rgba(0, 217, 255, 0.8), transparent);
      transition: transform 0.1s ease;
      mix-blend-mode: screen;
    `;

    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'fixed w-12 h-12 rounded-full pointer-events-none z-40 hidden md:block';
    cursorFollower.style.cssText = `
      background: radial-gradient(circle, rgba(255, 107, 157, 0.3), transparent);
      transition: transform 0.3s ease;
      mix-blend-mode: screen;
    `;

    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX - 12 + 'px';
      cursor.style.top = e.clientY - 12 + 'px';

      cursorFollower.style.left = e.clientX - 24 + 'px';
      cursorFollower.style.top = e.clientY - 24 + 'px';
    });

    // Hover effects
    document.querySelectorAll('a, button, .btn').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(0.8)';
      });

      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
      });
    });
  }
}

// Mobile menu functionality
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}

// Video modal functionality
function setupVideoModal() {
  const playVideoBtn = document.getElementById('play-video-btn');
  const videoModal = document.getElementById('video-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  
  if (playVideoBtn && videoModal && closeModalBtn) {
    playVideoBtn.addEventListener('click', function() {
      videoModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
    
    closeModalBtn.addEventListener('click', function() {
      videoModal.classList.add('hidden');
      document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close modal when clicking outside the content
    videoModal.addEventListener('click', function(event) {
      if (event.target === videoModal) {
        videoModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && !videoModal.classList.contains('hidden')) {
        videoModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add parallax effect to stars on scroll
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const starsContainer = document.getElementById('stars-container');
  
  if (starsContainer) {
    starsContainer.style.transform = `translateY(${scrollPosition * 0.3}px)`;
  }
});