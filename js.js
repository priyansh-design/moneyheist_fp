var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
