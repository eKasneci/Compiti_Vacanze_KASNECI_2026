let tempo = 0;
let cronometro;

document.getElementById("avvia").addEventListener("click", function() {
    cronometro = setInterval(function() {
        tempo++;

        document.getElementById("tempo").textContent = tempo;
    }, 1000);
});

document.getElementById("ferma").addEventListener("click", function() {
    clearInterval(cronometro);
});

document.getElementById("azzera").addEventListener("click", function() {
    clearInterval(cronometro);

    tempo = 0;

    document.getElementById("tempo").textContent = tempo;
});