const products = [
    {
        id: 1,
        name: "Produto 1",
        image: "img/produto.png",
        description: "Descrição detalhada do produto 1",
        specifications: {
            cor: "Azul",
            tamanho: "M",
            material: "Algodão"
        }
    },
    {
        id: 2,
        name: "Produto 2",
        image: "img/produto.png",
        description: "Descrição detalhada do produto 2",
        specifications: {
            cor: "Verde",
            tamanho: "G",
            material: "Poliéster"
        }
    },
    {
        id: 3,
        name: "Produto 3",
        image: "img/produto.png",
        description: "Descrição detalhada do produto 3",
        specifications: {
            cor: "Amarelo",
            tamanho: "G",
            material: "Poliéster"
        }
    },
    {
        id: 4,
        name: "Produto 4",
        image: "img/produto.png",
        description: "Descrição detalhada do produto 4",
        specifications: {
            cor: "Amarelo",
            tamanho: "G",
            material: "Poliéster"
        }
    }
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