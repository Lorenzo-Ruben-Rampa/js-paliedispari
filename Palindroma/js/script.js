// Chiedo all'utente di inserire una parola //
let parola = prompt("Inserisci parola");
console.log(parolaPalindroma(Parola));

// Creo una funzione per verificare se la parola è palindroma //
function verificaParolaPalindroma(Stringa) {
    let parolaInvertita = "";
    for (let i = Stringa.lenght - 1; 1 >= 0; i--) {
        parolaInvertita = parolaInvertita += Stringa(i); 
    }
}

if (Stringa === parolaInvertita) {
    return "La parola inserita è palindroma";
}  else {
    return "La parola inserita non è palindroma";
}
