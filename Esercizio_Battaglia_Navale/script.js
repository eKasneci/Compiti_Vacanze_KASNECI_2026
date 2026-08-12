const grid = document.getElementById("grid");
const tentativiSpan = document.getElementById("tentativi");
const naviSpan = document.getElementById("navi-rimaste");
const tempoSpan = document.getElementById("tempo");
const msg = document.getElementById("risultato");
const nuovaPartita = document.getElementById("nuova-partita");

const dimensione = 10;

let tentativi = 0;
let tempo = 0;
let intervallo;

const navi = [
    [2, 3, 4],
    [15, 25, 35, 45],
    [67, 68],
    [82, 83, 84]
];

let celleNave = [];
let colpite = [];

function creaGriglia() {
    grid.innerHTML = "";

    for (let i = 0; i < dimensione * dimensione; i++) {
        const cella = document.createElement("div");

        cella.classList.add("cella");
        cella.dataset.indice = i;

        cella.addEventListener("click", cliccaCella);

        grid.appendChild(cella);
    }
}

function preparaNavi() {
    celleNave = [];
    colpite = [];

    for (const nave of navi) {
        for (const posizione of nave) {
            celleNave.push(posizione);
        }
    }

    naviSpan.textContent = celleNave.length;
}

function cliccaCella(event) {
    const cella = event.target;
    const indice = Number(cella.dataset.indice);

    if (cella.classList.contains("cliccata")) {
        return;
    }

    cella.classList.add("cliccata");

    tentativi++;
    tentativiSpan.textContent = tentativi;

    if (celleNave.includes(indice)) {
        cella.classList.add("colpito");
        msg.textContent = "Colpito!";

        colpite.push(indice);

        naviSpan.textContent = celleNave.length - colpite.length;

        if (colpite.length === celleNave.length) {
            msg.textContent = "Hai affondato tutte le navi!";
            clearInterval(intervallo);
        }
    } else {
        cella.classList.add("acqua");
        msg.textContent = "Acqua!";
    }
}

function avviaTimer() {
    clearInterval(intervallo);

    tempo = 0;
    tempoSpan.textContent = tempo;

    intervallo = setInterval(() => {
        tempo++;
        tempoSpan.textContent = tempo;
    }, 1000);
}

function nuovaPartitaFunzione() {
    tentativi = 0;
    tentativiSpan.textContent = tentativi;

    msg.textContent = "Clicca su una cella per iniziare!";

    creaGriglia();
    preparaNavi();
    avviaTimer();
}

nuovaPartita.addEventListener("click", nuovaPartitaFunzione);

nuovaPartitaFunzione();