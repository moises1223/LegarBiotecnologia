const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
   <div class="section-footer-content container">
                    <div class="blocks">


                        <div class="block1">
                            <div class="block-content">
                                <img class="brand-logo" src="img/logo.png" alt="">
                                <p>AV PEDRO CEZAR SACCOL, 555, SALA 40 <br>- PRÉDIO A, CEP: 97030-440</p>
                                <div class="contact">
                                    <p>+55 00 0 0000-0000</p>
                                    <p>contato.legar@legarmais.com</p>
                                </div>

                                <div class="social-icons">
                                    <a href="">
                                        <img src="img/facebook-icon.png" alt="">
                                    </a>
                                    <a href="">
                                        <img src="img/instagram-icon.png" alt="">
                                    </a>
                                    <a href="">
                                        <img src="img/whatsapp-icon.png" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="block2">
                            <div class="block-content">
                                <h1>Acesso rápido</h1>
                                <div class="items">
                                    <ul class="links-container">
                                        <li class="link-item"> <a href="/#sectionHome" class="link">Home</a></li>
                                        <li class="link-item"> <a href="/#sectionwho" class="link">Quem somos</a></li>
                                        <li class="link-item"> <a href="/#sectionProdutos" class="link">Produtos</a>
                                        </li>
                                        <li class="link-item"> <a href="/#sectionBenProdutos"
                                                class="link">Benefícios</a></li>
                                        <li class="link-item"> <a href="/#sectionBlog" class="link">Blog</a></li>
                                        <li class="link-item"> <a href="/#sectionForms" class="link">Contato</a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div class="block3">
                            <div class="block-content">
                                <h1>Newsletter</h1>
                                <p>Cadastre-se e fique por dentro <br>das novidades.</p>
                                <form class="form" action="https://formspree.io/f/xgveepby" method="POST">
                                    <input required class="email" name="email" placeholder="Insira seu e-mail ">

                                    <a href=""><button>INSCREVER</button></a>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="website-info">
                        <p>© Copyright 2024. Todos os direitos reservados. Site desenvolvido pela <a
                                href="https://abystract.vercel.app/"> Abystract
                                Digital
                                Solutions</a>
                        </p>
                    </div>
                </div>
    `;
}

createFooter();