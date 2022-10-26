// *Snack1*
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let arrayVuoto = [];

let somma = 0;

while( somma < 50 ){

let numeroUtente = parseInt(prompt("dammi un numero"));

arrayVuoto.push(numeroUtente);

somma = somma + numeroUtente;

}


console.log("a posto così, siamo arrivati a" ,somma);

   // FUNZIONA 

 