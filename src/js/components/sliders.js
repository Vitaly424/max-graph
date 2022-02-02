import Swiper, { Navigation, Pagination } from "Swiper";
const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue("--grid-gap"));

Swiper.use([Navigation, Pagination]);

const portfolioSwiper = document.querySelector(".js-swiper-portfolio");

if (portfolioSwiper) {
  const portSlider = new Swiper(portfolioSwiper, {
    slidesPerView: 3,
    spaceBetween: gap,
    on: {
      init: function () {
        const activeSlide = portfolioSwiper.querySelector(
          ".swiper-slide-active"
        );
        const nextActiveSlide = activeSlide.nextElementSibling;
        const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

        activeSlide.classList.add("slider-visible");
        nextActiveSlide.classList.add("slider-visible");
        nextNextActiveSlide.classList.add("slider-visible");
      },
    },
    navigation: {
      nextEl: ".js-portfolio-next",
      prevEl: ".js-portfolio-prev",
    },
  });

  document.querySelector(".js-portfolio-next").addEventListener("click", () => {
    document
      .querySelectorAll(".js-swiper-portfolio .swiper-slide")
      .forEach((slide) => slide.classList.remove("slider-visible"));
    const activeSlide = portfolioSwiper.querySelector(".swiper-slide-active");
    const nextActiveSlide = activeSlide.nextElementSibling;
    const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

    activeSlide.classList.add("slider-visible");
    nextActiveSlide.classList.add("slider-visible");
    nextNextActiveSlide.classList.add("slider-visible");
  });

  document.querySelector(".js-portfolio-prev").addEventListener("click", () => {
    document
      .querySelectorAll(".js-swiper-portfolio .swiper-slide")
      .forEach((slide) => slide.classList.remove("slider-visible"));
    const activeSlide = portfolioSwiper.querySelector(".swiper-slide-active");
    const nextActiveSlide = activeSlide.nextElementSibling;
    const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

    activeSlide.classList.add("slider-visible");
    nextActiveSlide.classList.add("slider-visible");
    nextNextActiveSlide.classList.add("slider-visible");
  });
}


const relatedSlider = document.querySelector('.js-swiper-related');

if (relatedSlider) {
  const relatedProjectSlider = new Swiper(relatedSlider, {
    slidesPerView: 3,
    spaceBetween: gap,
    on: {
      init: function () {
        const activeSlide = relatedSlider.querySelector(
          ".swiper-slide-active"
        );
        const nextActiveSlide = activeSlide.nextElementSibling;
        const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

        activeSlide.classList.add("slider-visible");
        nextActiveSlide.classList.add("slider-visible");
        nextNextActiveSlide.classList.add("slider-visible");
      },
    },
    navigation: {
      nextEl: ".js-related-next",
      prevEl: ".js-related-prev"
    },
  });

  document.querySelector(".js-related-next").addEventListener("click", () => {
    document
      .querySelectorAll(".js-swiper-related .swiper-slide")
      .forEach((slide) => slide.classList.remove("slider-visible"));
    const activeSlide = relatedSlider.querySelector(".swiper-slide-active");
    const nextActiveSlide = activeSlide.nextElementSibling;
    const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

    activeSlide.classList.add("slider-visible");
    nextActiveSlide.classList.add("slider-visible");
    nextNextActiveSlide.classList.add("slider-visible");
  });

  document.querySelector(".js-related-prev").addEventListener("click", () => {
    document
      .querySelectorAll(".js-swiper-related .swiper-slide")
      .forEach((slide) => slide.classList.remove("slider-visible"));
    const activeSlide = relatedSlider.querySelector(".swiper-slide-active");
    const nextActiveSlide = activeSlide.nextElementSibling;
    const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

    activeSlide.classList.add("slider-visible");
    nextActiveSlide.classList.add("slider-visible");
    nextNextActiveSlide.classList.add("slider-visible");
  });
}

const testimonialsSlider = new Swiper(".js-swiper-testimonials", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".js-testimonials-next",
    prevEl: ".js-testimonials-prev",
  },
});
