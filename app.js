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

  // Change slide every 4 sec
  setInterval(function () {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000);

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
});
