const createNav = () =>{
    let navbar = document.querySelector('nav');

    navbar.innerHTML=`
     <a href="/public_html/#sectionHome"><img class="brand-logo" src="img/logo.png" alt=""></a>
                    <div class="nav-items">
                        <ul class="links-container">
                            <li class="link-item"> <a href="/public_html/#sectionHome" class="link">Home</a></li>
                            <li class="link-item"> <a href="/public_html/#sectionwho" class="link">Quem somos</a></li>
                            <li class="link-item"> <a href="/public_html/#sectionProdutos" class="link">Produtos</a></li>
                            <li class="link-item"> <a href="/public_html/#sectionBenProdutos" class="link">Benefícios</a>
                            </li>
                            <li class="link-item"> <a href="/public_html/#sectionBlog" class="link">Blog</a></li>
                            <li class="link-item"> <a href="/public_html/#sectionForms" class="link">Contato</a></li>
                        </ul>

                        <div class="menu">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>`;
}
createNav();