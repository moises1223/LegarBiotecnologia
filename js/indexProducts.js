const products = [
    {
        id: 1,
        name: "Option Pro",
        description: " Potencialize sua produtividade",
        image: "img/Produto-OptionPro.png",
    },
    {
        id: 2,
        name: "Option One Full",
        description: "Formulação equilibrada (25%  v/v  de aminoácidos livres)",
        image: "img/Produto-OptionOneFull.png",
    },
    {
        id: 1,
        name: "Option One Pro",
        description: " Potencialize sua produtividade",
        image: "img/Produto-OptionPro.png",
    },
    {
        id: 2,
        name: "Option One Full",
        description: "Formulação equilibrada (25%  v/v  de aminoácidos livres)",
        image: "img/Produto-OptionOneFull.png",
    },
    
    
    // Adicione mais produtos conforme necessário
];

// Função para criar os cards do carrossel

function createProductCards() {
    const carousel = document.querySelector('.swiper-products');

    products.forEach(product => {

        const cardItem = document.createElement('li');
        cardItem.className = 'card-item swiper-slide';

        const cardLink = document.createElement('a');
        cardLink.href = `produtos.html?id=${product.id}`;
        cardLink.className = 'card-link';

        cardLink.innerHTML = `

               <div class="img-product">
                   <img src="${product.image}" class="card-img" alt="${product.name}" >
               </div>
                   <h2 class="card-title">${product.name}</h2>
               <div class="block">
                   <p class="description">${product.description} </p>
                   <button class="card-button"> VER </button>
               </div>
        `;
        carousel.appendChild(cardItem)
        cardItem.appendChild(cardLink);


    });
}
// Inicializa o carrossel
document.addEventListener('DOMContentLoaded', function () {
    createProductCards();

    // Depois inicializa o Swiper
    const swiper = new Swiper('.product-carroussel', {
        loop: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});