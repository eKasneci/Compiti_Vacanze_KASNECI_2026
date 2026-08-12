let navi = [
    {
        nome: "Destroyer",
        posizione: [2, 3, 4],
        colpita: false
    },
    {
        nome: "Submarino",
        posizione: [15, 20],
        colpita: false
    }
];

let griglia = document.getElementById("griglia");

for (let i = 0; i < 25; i++) {
    let cella = document.createElement("div");

    cella.classList.add("cella");

    cella.addEventListener("click", function() {
        for (let nave of navi) {
            if (nave.posizione.includes(i)) {
                cella.classList.add("colpita");
                nave.colpita = true;
            }
        }

        mostraNavi();
    });

    griglia.appendChild(cella);
}

function mostraNavi() {
    let testo = "";

    for (let nave of navi) {
        testo += nave.nome + ": ";

        if (nave.colpita) {
            testo += "trovata";
        } else {
            testo += "nascosta";
        }

        testo += "<br>";
    }

    document.getElementById("navi").innerHTML = testo;
}

mostraNavi();