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
    ]

    return products.find(product => product.id === parseInt(productId));
}


// Função para renderizar os detalhes do produto
function renderProductDetails() {
    const productId = getUrlParameter('id');
    const product = findProduct(productId);

    if (!product) {
        document.getElementById('productDetails').innerHTML = '<h2>Produto não encontrado</h2>';
        return;
    }

    const detailsHtml = `
        <h1>${product.name}</h1>
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2>${product.price}</h2>
        <p>${product.description}</p>
        
        <div class="specifications">
            <h3>Especificações</h3>
            <ul>
                ${Object.entries(product.specifications)
            .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
            .join('')}
            </ul>
        </div>
    `;

    document.getElementById('productDetails').innerHTML = detailsHtml;
}

// Inicializa a página de detalhes
renderProductDetails();
