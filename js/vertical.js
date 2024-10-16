document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-container-vertical', {
        loop: true,
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 2,
        grabCursor: true,

        autoplay: {
            delay: 5000,
          },
    },
);
});