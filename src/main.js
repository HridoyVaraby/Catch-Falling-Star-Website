// Background stars animation
document.addEventListener('DOMContentLoaded', function() {
  createStars();
  setupMobileMenu();
  setupVideoModal();
});

// Create animated stars in the background
function createStars() {
  const starsContainer = document.getElementById('stars-container');
  const starCount = window.innerWidth < 768 ? 50 : 100; // Fewer stars on mobile
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 3 + 1; // Random size between 1-4px
    
    // Position randomly
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Animation delay
    const delay = Math.random() * 5;
    
    // Apply styles
    star.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background-color: #ffd700;
      border-radius: 50%;
      left: ${posX}%;
      top: ${posY}%;
      opacity: ${Math.random() * 0.5 + 0.3};
      animation: twinkle 3s ease-in-out infinite;
      animation-delay: ${delay}s;
    `;
    
    starsContainer.appendChild(star);
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