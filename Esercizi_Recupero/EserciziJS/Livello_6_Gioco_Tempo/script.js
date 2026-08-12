let griglia = document.getElementById("griglia");
let tempo = 30;
let specialiTrovate = 0;
let giocoFinito = false;
let intervallo;

let celleSpeciali = [2, 7, 13, 19, 23];

function creaGioco() {
    clearInterval(intervallo);

    griglia.innerHTML = "";

    tempo = 30;
    specialiTrovate = 0;
    giocoFinito = false;

    document.getElementById("tempo").textContent = tempo;

    document.getElementById("risultato").textContent =
        "Trova tutte le celle speciali!";

    for (let i = 0; i < 25; i++) {
        let cella = document.createElement("div");

        cella.classList.add("cella");

        cella.addEventListener("click", function() {
            if (giocoFinito || cella.classList.contains("cliccata")) {
                return;
            }

            cella.classList.add("cliccata");

            if (celleSpeciali.includes(i)) {
                cella.classList.add("speciale");

                specialiTrovate++;

                document.getElementById("risultato").textContent =
                    "Hai trovato una cella speciale!";

                if (specialiTrovate == celleSpeciali.length) {
                    giocoFinito = true;
                    clearInterval(intervallo);

                    document.getElementById("risultato").textContent =
                        "Hai trovato tutte le celle!";
                }
            }
        });

        griglia.appendChild(cella);
    }

    intervallo = setInterval(function() {
        tempo--;

        document.getElementById("tempo").textContent = tempo;

        if (tempo <= 0) {
            clearInterval(intervallo);
            giocoFinito = true;

            document.getElementById("risultato").textContent =
                "Tempo scaduto! Hai trovato " + specialiTrovate + " celle.";
        }
    }, 1000);
}

document.getElementById("ricomincia").addEventListener("click", function() {
    creaGioco();
});

creaGioco();