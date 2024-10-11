const menu = document.querySelector('.menu'); //botao
const navmenu = document.querySelector('.links-container'); //itens menu


menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo');
    navmenu.classList.toggle('ativo');
})