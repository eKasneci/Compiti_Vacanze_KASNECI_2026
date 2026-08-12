let intervallo;

document.getElementById("avvia").addEventListener("click", function() {
    let tempo = Number(document.getElementById("secondi").value);

    clearInterval(intervallo);

    document.getElementById("tempo").textContent = tempo;
    document.getElementById("messaggio").textContent = "";

    intervallo = setInterval(function() {
        tempo--;

        document.getElementById("tempo").textContent = tempo;

        if (tempo <= 0) {
            clearInterval(intervallo);

            document.getElementById("messaggio").textContent =
                "Il tempo è terminato!";
        }
    }, 1000);
});