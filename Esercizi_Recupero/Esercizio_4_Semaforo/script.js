let rosso = document.getElementById("rosso");
let giallo = document.getElementById("giallo");
let verde = document.getElementById("verde");

document.getElementById("avvia").addEventListener("click", function() {

    verde.classList.add("acceso");

    setTimeout(function() {
        giallo.classList.add("acceso");
    }, 5000);

    setTimeout(function() {
        verde.classList.remove("acceso");
        giallo.classList.remove("acceso");

        rosso.classList.add("acceso");
    }, 7000);
});