document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper-container-horizontal', {
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination-horizontal',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });