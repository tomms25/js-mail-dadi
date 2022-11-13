// Gioco dei dadi:
// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let numeroComputer = Math.floor(Math.random()*6) + 1;
console.log(numeroComputer);

let numeroGiocatore = Math.floor(Math.random()*6) + 1;
console.log(numeroGiocatore);


// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let vincitore;

if (numeroComputer > numeroGiocatore) {
    vincitore = "Computer vince!";
}else {
    vincitore = "Giocatore vince!";
}

console.log(vincitore);

if (vincitore == (vincitore = "Giocatore vince!")) {
    document.getElementById("winner").innerHTML = "Complimenti! Il " + vincitore;
}else {
    document.getElementById("winner").innerHTML = "Mi dispiace! Il Computer vince!";
}