// Scelta utente tra pari e dispari e un numero tra 1 e 5 //
const sceltaUtenteParioDispari = prompt("Scegli tra pari o dispari e inserisci la tua risposta");
const numeroSceltaUtente = parselInt(prompt("Inserisci un numero da 1 a 5: "));

// Genero un numero random //

function numRandomComputer (min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

const numEstrattodalComputer = numRandomComputer (1, 5);
console.log("Il numero estratto dal computer è: ");

const sommaNumeriGiocati = numeroSceltaUtente + numEstrattodalComputer;
console.log("La somma del numero scelto dall'utente e quella estratta dal computer è: ", sommaNumeriGiocati);

// Stabilisci se la formula è pari o dispari //

function verificaParieDispari(numdaVerificare) {
    if (numdaVerificare % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

// Dichiaro chi ha vinto //

const risultatoPariDispari = verificaPariDispari(sommaNumeriGiocati);
console.log("La somma dei due numeri è un numero");

if (risultatoPariDispari === sceltaUtenteParioDispari) {
    console.log("Congratulazioni, hai vinto!");
} else {
    console.log("Ha vinto il computer");
}

