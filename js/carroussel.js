    const createCarroussel = () =>{
    let product = document.querySelector('.card-wrapper');

    product.innerHTML=`
                    <ul class="swiper-wrapper card-list ">

                        <li class="card-item swiper-slide">
                            <a href="/produtos.html" class="card-link">
                                <div class="img-product">
                                    <img src="img/produto.png" class="card-img" alt="Card Image" >
                                </div>
                                <h2 class="card-title">Option One Pró </h2>
                                <div class="block">
                                    <p class="description">Aminoácido concentrado e de rápida absorção </p>
                                    <button class="card-button "> VER </button>

                                </div>
                            </a>
                        </li>

                        <li class="card-item swiper-slide">
                            <a href="/produtos.html" class="card-link">
                                <div class="img-product">
                                    <img src="img/produto.png" class="card-img" alt="Card Image" >
                                </div>
                                <h2 class="card-title">Option One Pró</h2>
                                <div class="block">
                                    <p class="description">Aminoácido concentrado e de rápida absorção </p>
                                    <button class="card-button ">VER </button>

                                </div>
                            </a>
                        </li>

                        <li class="card-item swiper-slide">
                            <a href="/produtos.html" class="card-link">
                                <div class="img-product">
                                    <img src="img/produto.png" class="card-img" alt="Card Image" >
                                </div>
                                <h2 class="card-title">Option One Pró</h2>
                                <div class="block">
                                    <p class="description">Aminoácido concentrado e de rápida absorção </p>
                                    <button class="card-button ">VER </button>

                                </div>
                            </a>
                        </li>

                        <li class="card-item swiper-slide">
                            <a href="/produtos.html" class="card-link">
                                <div class="img-product">
                                    <img src="img/produto.png" class="card-img" alt="Card Image" >
                                </div>
                                <h2 class="card-title">Option One Pró</h2>
                                <div class="block">
                                    <p class="description">Aminoácido concentrado e de rápida absorção </p>
                                    <button class="card-button ">VER </button>

                                </div>
                            </a>
                        </li>

                        <li class="card-item swiper-slide">
                            <a href="/produtos.html" class="card-link">
                                <div class="img-product">
                                    <img src="img/produto.png" class="card-img" alt="Card Image" >
                                </div>
                                <h2 class="card-title">Option One Pró</h2>
                                <div class="block">
                                    <p class="description">Aminoácido concentrado e de rápida absorção </p>
                                    <button class="card-button ">VER</button>

                                </div>
                            </a>
                        </li>
                        
                    </ul>                   
                   `;
}

createCarroussel();