 const news = [
    {
        id: 1,
        image: 'img/blog-section-home/news-cover.png',
        icon: 'img/tractor 1.png',
        title: 'Prolina: Ferramenta indispensável para a manutenção da produtividade em anos de seca',
        description: 'Considerado um estresse abiótico, o déficit hídrico impacta diretamente o crescimento vegetal, podendo exercer influencia também sobre o desenvolvimento das plantas e produtividade das culturas agrícolas. [...] Ler mais'

    },
    {
        id: 2,
        image: 'img/blog-section-home/BLOGcapa.png',
        icon: 'img/botany 1.png',
        title: 'Importância e benefícios da Prolina no combate à seca',
        description: 'A deficiência hídrica é um dos principais limitantes da produtividade das lavouras brasileiras de soja, causando quedas significativas na produção das safras de verão. [...] Ler mais'

    },
    {
        id: 1,
        image: 'img/blog-section-home/news-cover.png',
        icon: 'img/tractor 1.png',
        title: 'Prolina: Ferramenta indispensável para a manutenção da produtividade em anos de seca',
        description: 'Considerado um estresse abiótico, o déficit hídrico impacta diretamente o crescimento vegetal, podendo exercer influencia também sobre o desenvolvimento das plantas e produtividade das culturas agrícolas. [...] Ler mais'

    },
    {
        id: 2,
        image: 'img/blog-section-home/BLOGcapa.png',
        icon: 'img/botany 1.png',
        title: 'Importância e benefícios da Prolina no combate à seca',
        description: 'A deficiência hídrica é um dos principais limitantes da produtividade das lavouras brasileiras de soja, causando quedas significativas na produção das safras de verão. [...] Ler mais'

    },

]

// Função para criar os cards do carrossel
function createBlogCards() {
    const carousel = document.querySelector('.swiper-blog');
    
    // Limpa o conteúdo existente antes de adicionar novos cards
    carousel.innerHTML = '';

    news.forEach(article => {
        const cardItem = document.createElement('li');
        cardItem.className = 'card-item swiper-slide';
        
        const cardLink = document.createElement('a');
        cardLink.href = `blog.html?id=${article.id}`;
        cardLink.className = 'card-link';
        
        cardLink.innerHTML = `
            <img src="${article.image}" alt="Card Image" class="card-img">
            <div class="icon"><img src="${article.icon}" alt=""></div>
            <p class="card-title">${article.title}</p>
            <h2 class="description">${article.description}</h2>
            <p class="badge-more">Saber Mais</p>
            <button class="card-button material-symbols-rounded">arrow_forward</button>
        `;
        
        cardItem.appendChild(cardLink);
        carousel.appendChild(cardItem);
    });
}

// Inicializa o carrossel
document.addEventListener('DOMContentLoaded', function () {
    // Primeiro cria os cards
    createBlogCards();

    // Depois inicializa o Swiper
    const swiper = new Swiper('.blog-carroussel', {
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