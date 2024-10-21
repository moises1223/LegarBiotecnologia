const createNav = () =>{
    let navbar = document.querySelector('nav');

    navbar.innerHTML=`
     <a href="/public_html/#sectionHome"><img class="brand-logo" src="img/logo.png" alt=""></a>
                    <div class="nav-items">
                        <ul class="links-container">
                            <li class="link-item"> <a href="/#sectionHome" class="link">Home</a></li>
                            <li class="link-item"> <a href="/#sectionwho" class="link">Quem somos</a></li>
                            <li class="link-item"> <a href="/#sectionProdutos" class="link">Produtos</a></li>
                            <li class="link-item"> <a href="/#sectionBenProdutos" class="link">Benefícios</a></li>
                            <li class="link-item"> <a href="/#sectionBlog" class="link">Blog</a></li>
                            <li class="link-item"> <a href="/#sectionForms" class="link">Contato</a></li>
                        </ul>

                        <div class="menu">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>`;
}
createNav();