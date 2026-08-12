let griglia = document.getElementById("griglia");
let punteggio = 0;
let celle = [];

let celleConPunti = [1, 5, 12, 18, 21];

function creaGriglia() {
    griglia.innerHTML = "";
    celle = [];

    for (let i = 0; i < 25; i++) {
        let cella = document.createElement("div");

        cella.classList.add("cella");

        cella.addEventListener("click", function() {
            if (cella.classList.contains("cliccata")) {
                return;
            }

            cella.classList.add("cliccata");

            if (celleConPunti.includes(i)) {
                punteggio += 10;
            }

            document.getElementById("punteggio").textContent = punteggio;
        });

        griglia.appendChild(cella);
        celle.push(cella);
    }
}

document.getElementById("ricomincia").addEventListener("click", function() {
    punteggio = 0;

    document.getElementById("punteggio").textContent = punteggio;

    creaGriglia();
});

creaGriglia();