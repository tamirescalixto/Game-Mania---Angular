// Alert botão comprar
function alertarUsuario(texto){
    alert(texto);
}

// Menu hamburguer
const hamburguer = document.querySelector(".hamburguer");
const menuNav = document.querySelector(".menu-nav1");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    menuNav.classList.toggle('active');
})

// Botão scroll topo
window.onscroll = function() {
    scroll();
}
function scroll() {
    var btn = document.getElementById("btnTop");
    if(document.documentElement.scrollTop > 1000) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Voltar ao topo 
function backToTop() {
    document.documentElement.scrollTop = 0;
}

// Scroll Menu de Navegação com jQuery
jQuery(document).ready(function($){
    $(".menu-navegacao").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},100);
    });
});