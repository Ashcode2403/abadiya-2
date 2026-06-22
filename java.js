document.addEventListener('DOMContentLoaded', function() {
var gallerySwiper = new Swiper(".gallery-swiper", {
    // 3D Coverflow effect
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 250,
    modifier: 1,
    slideShadows: true,
    },
    // Pagination dots
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    // Auto-play settings
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    }
});
});