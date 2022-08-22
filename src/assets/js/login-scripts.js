// Menu hamburguer
const hamburguer = document.querySelector(".hamburguer");
const menuNav = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    menuNav.classList.toggle('active');
})

// Login form
function logar() {

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (document.getElementById("email").value == "") {
        alert('Por favor, preencha o campo email!');
        document.getElementById("email").focus();
        return false
    } 

    if (document.getElementById("senha").value == "") {
        alert('Por favor, preencha o campo senha!');
        document.getElementById("senha").focus();
        return false;
    } else {
        location.href = "index.html";
    }
    
}