// Função para obter parâmetros da URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function findProduct(productId) {
    const products = [
        {
            id: 1,
            name: "Produto 1",
            image: "img/produto.png",
            subtitle: "Subtítulo do produto 1",
            description: "Descrição detalhada do produto 1",
            specifications: {
                cor: "Azul",
                tamanho: "M",
                material: "Algodão"
            },
            // Array de imagens para o carrossel
            images: [
                "img/produto.png",
                "img/produto.png",
                "img/produto.png",
                "img/produto.png",
                "img/produto.png"
            ]
        },
        {
            id: 2,
            name: "Produto 2",
            image: "img/produto.png",
            subtitle: "Subtítulo do produto 2",
            description: "Descrição detalhada do produto 2",
            specifications: {
                cor: "Azul",
                tamanho: "M",
                material: "Algodão"
            },
            // Array de imagens para o carrossel
            images: [
                "img/produto.png",
                "img/produto.png",
                "img/produto.png",
                "img/produto.png",
                "img/produto.png"
            ]
        },
        {
            id: 3,
            name: "Produto 3",
            image: "img/produto.png",
            subtitle: "Subtítulo do produto 3",
            description: "Descrição detalhada do produto 3",
            specifications: {
                cor: "Azul",
                tamanho: "M",
                material: "Algodão"
            },
            // Array de imagens para o carrossel
            images: [
                "img/produto.png",
                "img/produto.png",
                "img/produto.png",
                "img/produto.png",
                "img/produto.png"
            ]
        },
        // ... outros produtos
    ];
    return products.find(product => product.id === parseInt(productId));
}

function renderProductDetails() {
    const productId = getUrlParameter('id');
    const product = findProduct(productId);
    
    if (!product) {
        console.error('Produto não encontrado');
        return;
    }

    // Renderiza o carrossel principal
    const mainSwiperWrapper = document.querySelector('.mySwiper2 .swiper-wrapper');
    mainSwiperWrapper.innerHTML = product.images.map(image => `
        <div class="swiper-slide">
            <img src="${image}" alt="${product.name}" />
        </div>
    `).join('');

    // Renderiza o carrossel de miniaturas
    const thumbnailSwiperWrapper = document.querySelector('.thumbnail-slider .swiper-wrapper');
    thumbnailSwiperWrapper.innerHTML = product.images.map(image => `
        <div class="swiper-slide">
            <img src="${image}" alt="${product.name}" />
        </div>
    `).join('');

    // Renderiza as informações do produto
    const productTitle = document.querySelector('.product-title');
    productTitle.innerHTML = `
        <h1 class="title">${product.name}</h1>
        <p class="sub-title">${product.subtitle}</p>
    `;

    const productDescription = document.querySelector('.product-description p.description');
    productDescription.textContent = product.description;

    // Inicializa os Swipers após renderizar o conteúdo
    initializeSwipers();
}

function initializeSwipers() {
    // Inicializa o Swiper de miniaturas
    const thumbnailSwiper = new Swiper(".thumbnail-slider", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    // Inicializa o Swiper principal
    const mainSwiper = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: thumbnailSwiper,
        },
    });
}

// Inicializa a página de detalhes quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', renderProductDetails);