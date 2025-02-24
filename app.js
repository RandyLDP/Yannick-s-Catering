document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a"); // Select all links

  // Mobile menu toggle functionality
  mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // Close menu when a link is clicked (for mobile users)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });
});

// Hero Slider functionality
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show first slide
  slides[0].classList.add("active");

  // Change slide every 3 seconds
  setInterval(function () {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 3000);

  // Navbar functionality
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.offsetHeight;

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }

    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
      navbar.classList.add("nav-hidden");
    } else {
      navbar.classList.remove("nav-hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Gallery functionality
  const galleryContainer = document.querySelector(".gallery-container");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const dotsContainer = document.querySelector(".gallery-dots");
  let currentIndex = 0;

  function initGallery() {
    if (window.innerWidth <= 768) {
      // Mobile Setup
      galleryItems.forEach((item) => (item.style.display = "none"));
      galleryItems[0].style.display = "block";
      setupDots();
    } else {
      // Desktop Setup
      galleryItems.forEach((item) => (item.style.display = "block"));
      dotsContainer.innerHTML = "";
    }
  }

  function setupDots() {
    dotsContainer.innerHTML = "";
    galleryItems.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => updateGallery(index));
      dotsContainer.appendChild(dot);
    });
  }

  function updateGallery(index) {
    if (window.innerWidth <= 768) {
      galleryItems.forEach((item) => (item.style.display = "none"));
      galleryItems[index].style.display = "block";

      const dots = document.querySelectorAll(".dot");
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[index].classList.add("active");

      currentIndex = index;
    }
  }

  // Touch events for mobile gallery
  let touchStartX = 0;
  let touchEndX = 0;

  galleryContainer.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    false
  );

  galleryContainer.addEventListener(
    "touchend",
    (e) => {
      if (window.innerWidth <= 768) {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
      }
    },
    false
  );

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        currentIndex = (currentIndex + 1) % galleryItems.length;
      } else {
        currentIndex =
          (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      }
      updateGallery(currentIndex);
    }
  }

  // Initialize gallery
  initGallery();

  // Debounce resize event
  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initGallery, 250);
  });
});
