let contenitore = document.getElementById("contenitore");

let posizione = 0;
let direzione = 1;

let animazione;
let avvioAnimazione;

let inMovimento = false;

for (let i = 0; i < 10; i++) {

    let div = document.createElement("div");

    div.className = "quadrato";

    if (i == 0) {
        div.classList.add("blu");
    }

    contenitore.appendChild(div);
}

let divs = document.querySelectorAll(".quadrato");

document.getElementById("avvia").addEventListener("click", function() {

    if (inMovimento) {
        return;
    }

    document.getElementById("messaggio").textContent =
        "L'animazione inizierà tra 3 secondi...";

    avvioAnimazione = setTimeout(function() {

        document.getElementById("messaggio").textContent =
            "Animazione in corso";

        inMovimento = true;

        animazione = setInterval(function() {

            divs[posizione].classList.remove("blu");

            posizione += direzione;

            if (posizione == 9) {
                direzione = -1;
            }

            if (posizione == 0) {
                direzione = 1;
            }

            divs[posizione].classList.add("blu");

        }, 50);

    }, 3000);
});

document.getElementById("stop").addEventListener("click", function() {

    clearTimeout(avvioAnimazione);
    clearInterval(animazione);

    inMovimento = false;

    document.getElementById("messaggio").textContent =
        "Animazione fermata";
});