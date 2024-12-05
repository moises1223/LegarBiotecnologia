import { products } from './produtos.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (product) {
        // Título e subtítulo
        document.querySelector('.title').textContent = product.name;
        document.querySelector('.sub-title').textContent = product.subTitle;

        // Descrição
        document.querySelector('.description').textContent = product.description;

        // Imagens do Slider Principal
        const mainSwiper = document.querySelector('.swiper-wrapper.main');
        mainSwiper.innerHTML = product.images.map(img =>
            `<div class="swiper-slide">
                <img src="${img}" alt="${product.name}" />
            </div>`
        ).join('');

        // Thumbnails
        const thumbnailSwiper = document.querySelector('.thumbnail-slider .swiper-wrapper');
        thumbnailSwiper.innerHTML = product.images.map(img =>
            `<div class="swiper-slide">
                <img src="${img}" alt="${product.name}" />
            </div>`
        ).join('');


        // Especificações
        const block1 = document.querySelector('.specs-items .block1');
        const block2 = document.querySelector('.specs-items .block2');

        // Divide as especificações em duas partes para cada bloco
        const specsPart1 = product.specifications.slice(0, 3); // Primeiras 3 especificações
        const specsPart2 = product.specifications.slice(3, 6); // Próximas 3 especificações

        // Preenche o bloco 1
        block1.innerHTML = specsPart1.map(spec =>
            `<div class="spec">
        <img class="spec-img" src="${spec.icon}" alt="">
        <p class="spec-name">${spec.name}</p>
    </div>`
        ).join('');

        // Preenche o bloco 2
        block2.innerHTML = specsPart2.map(spec =>
            `<div class="spec">
        <img class="spec-img" src="${spec.icon}" alt="">
        <p class="spec-name">${spec.name}</p>
    </div>`
        ).join('');



        // * Mais especificações

        const moreSpecsContent = document.querySelectorAll('.specs-cards .block1, .specs-cards .block2');
        if (product.moreSpecs && Array.isArray(product.moreSpecs)) {
            // Divide as "Mais Especificações" em 2 grupos de 3
            const moreSpecsPart1 = product.moreSpecs.slice(0, 3);
            const moreSpecsPart2 = product.moreSpecs.slice(3, 6);

            // Preenche o primeiro bloco
            moreSpecsContent[0].innerHTML = moreSpecsPart1.map(moreSpec =>
                `<div class="block">
                <h2>${moreSpec.title}</h2>
                <p>${moreSpec.content}</p>
            </div>`
            ).join('');

            // Preenche o segundo bloco
            moreSpecsContent[1].innerHTML = moreSpecsPart2.map(moreSpec =>
                `<div class="block">
                <h2>${moreSpec.title}</h2>
                <p>${moreSpec.content}</p>
            </div>`
            ).join('');
        } else {
            console.error("Erro: `moreSpecs` não está definido ou não é um array válido.");
        }
       



        // Inicializar Swiper novamente após carregar as imagens
        initializeSwiper();
    }
});

function initializeSwiper() {
    const swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const thumbnailSwiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesProgress: true,
    });

    swiper2.controller.control = thumbnailSwiper;
    thumbnailSwiper.controller.control = swiper2;
}