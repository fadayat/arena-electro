const sliderWrapper = document.querySelector(".slider-wrapper");
const lines = document.querySelectorAll(".line");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const totalSlides = 2;

function updateSlider() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  lines.forEach((line, index) => {
    line.classList.toggle("active", index === currentIndex);
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

lines.forEach((line) => {
  line.addEventListener("click", () => {
    currentIndex = parseInt(line.dataset.slide);
    updateSlider();
  });
});

// ------------------------------

// Sticky Navbar
window.addEventListener("scroll", function () {
  const nav = document.getElementById("mainNav");

  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
