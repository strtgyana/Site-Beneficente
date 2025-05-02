function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const cookiesMsg = document.getElementById("cookiesMsg");

    // Verifica se o usuário já aceitou os cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        cookiesMsg.classList.add("mostrar");
    }

    // Função para aceitar os cookies
    window.aceitarCookies = function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookiesMsg.classList.remove("mostrar");
    };
});