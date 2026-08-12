let nomeGiocatore1;
let nomeGiocatore2;

let punteggio1 = 0;
let punteggio2 = 0;

let turno = 1;
let pulsantiCliccati = 0;

let giocoFinito = false;

document.getElementById("avvia").addEventListener("click", function() {

    nomeGiocatore1 = document.getElementById("giocatore1").value;
    nomeGiocatore2 = document.getElementById("giocatore2").value;

    if (nomeGiocatore1 == "" || nomeGiocatore2 == "") {
        alert("Inserisci entrambi i nomi.");
        return;
    }

    creaGioco();
});

function creaGioco() {

    document.getElementById("inputGiocatori").style.display = "none";

    let gioco = document.getElementById("gioco");

    gioco.innerHTML = "";

    let riga = document.createElement("div");
    riga.className = "row justify-content-center";

    for (let i = 0; i < 18; i++) {

        let colonna = document.createElement("div");
        colonna.className = "col-2 mb-2";

        let pulsante = document.createElement("button");

        pulsante.className = "btn btn-secondary cella";

        let valore = Math.floor(Math.random() * 101) - 50;

        pulsante.dataset.valore = valore;

        pulsante.addEventListener("mouseover", function() {
            document.getElementById("suggerimento").textContent =
                "Valore: " + valore;
        });

        pulsante.addEventListener("mouseout", function() {
            document.getElementById("suggerimento").textContent = "";
        });

        pulsante.addEventListener("click", function() {
            cliccaCella(pulsante, valore);
        });

        colonna.appendChild(pulsante);
        riga.appendChild(colonna);
    }

    gioco.appendChild(riga);

    let giocatori = document.getElementById("giocatori");

    giocatori.innerHTML = "";

    let pulsanteGiocatore1 = document.createElement("button");
    pulsanteGiocatore1.id = "pulsanteGiocatore1";
    pulsanteGiocatore1.className = "btn btn-warning giocatore";
    pulsanteGiocatore1.textContent = nomeGiocatore1;

    let pulsanteGiocatore2 = document.createElement("button");
    pulsanteGiocatore2.id = "pulsanteGiocatore2";
    pulsanteGiocatore2.className = "btn btn-danger giocatore";
    pulsanteGiocatore2.textContent = nomeGiocatore2;

    giocatori.appendChild(pulsanteGiocatore1);
    giocatori.appendChild(document.createElement("br"));
    giocatori.appendChild(pulsanteGiocatore2);
}

function cliccaCella(pulsante, valore) {

    if (giocoFinito) {
        return;
    }

    pulsante.disabled = true;
    pulsante.textContent = valore;

    if (turno == 1) {

        pulsante.className = "btn btn-warning cella";

        punteggio1 += valore;

        document.getElementById("pulsanteGiocatore1").style.width =
            (100 + punteggio1) + "px";

        if (punteggio1 < 0) {
            finePartita(nomeGiocatore2);
            return;
        }

        turno = 2;

    } else {

        pulsante.className = "btn btn-danger cella";

        punteggio2 += valore;

        document.getElementById("pulsanteGiocatore2").style.width =
            (100 + punteggio2) + "px";

        if (punteggio2 < 0) {
            finePartita(nomeGiocatore1);
            return;
        }

        turno = 1;
    }

    pulsantiCliccati++;

    if (pulsantiCliccati == 18) {

        if (punteggio1 > punteggio2) {
            finePartita(nomeGiocatore1);
        } else if (punteggio2 > punteggio1) {
            finePartita(nomeGiocatore2);
        } else {
            document.getElementById("vincitore").textContent =
                "Pareggio!";
        }
    }
}

function finePartita(nomeVincitore) {

    giocoFinito = true;

    document.getElementById("vincitore").textContent =
        "Vincitore: " + nomeVincitore;
}