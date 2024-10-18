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
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 3
            }
        }

    },
    );
});