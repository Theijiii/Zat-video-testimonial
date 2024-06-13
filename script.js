var mySwiper = new Swiper(".swiper-container", {
  pagination: ".swiper-pagination",
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 30,
  slideToClickedSlide: true,
  autoplay: true,
  speed: 3000,
  loop: true,
  autoplay: 3000,
  paginationClickable: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 24,
      resistanceRatio: 0.85
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 28,
      resistanceRatio: 0.85
    },
    980: {
      slidesPerView: 5,
      spaceBetween: 28,
      resistanceRatio: 0.85
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 32,
      resistanceRatio: 0
    }
  }
});

jQuery(".swiper-container").on("mouseenter", function (e) {
  console.log("stop autoplay");
  mySwiper.stopAutoplay();
});
jQuery(".swiper-container").on("mouseleave", function (e) {
  console.log("start autoplay");
  mySwiper.startAutoplay();
});

//YOUTUBE VIDEO
jQuery(".play-button").click(function (e) {
  var iframeEl = jQuery("<iframe>", { src: jQuery(this).data("url") });
  jQuery("#youtubevideo").attr("src", jQuery(this).data("url"));
});

jQuery("#close-video").click(function (e) {
  jQuery("#youtubevideo").attr("src", "");
});

jQuery(document).on("hidden.bs.modal", "#myModal", function () {
  jQuery("#youtubevideo").attr("src", "");
});
