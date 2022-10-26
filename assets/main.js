// *Snack1*
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// let arrayVuoto = [];

// let somma = 0;

// while( somma < 50 ){

// let numeroUtente = parseInt(prompt("dammi un numero"));

// arrayVuoto.push(numeroUtente);

// somma = somma + numeroUtente;

// }


// console.log("a posto così, siamo arrivati a" ,somma);

// FUNZIONA 

// *Snack2*
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// let somma2 = 0;         

// let = numeroUtente2 = 0;

// let i2 = 0;

// while( i2 < 5 ){

//     let numeroUtente2 = parseInt(prompt("dammi un numero, ancora una volta"));

//     somma2 = somma2 + numeroUtente2;

//     i2++;
// }

//     console.log(somma2);

// FUNZIONA

// *Snack3* (Bonus)Fai inserire un numero, che chiameremo N, all’utente.Genera N array,ognuno formato da 10 numeri casuali da 1 a 100.Ogni volta che ne crei uno, stampalo.

let n = parseInt(prompt("Quanti array creiamo?"));

let x = 0;

while (x < n) {
    let array = new Array();
    let i = 0;

    while (i < 10) {
        array.push(Math.round(Math.random() * 100));
        i++;
    }

    console.log(array);
    x++;
}

// Funziona 

// *Snack4 (Bonus)*
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// Interrompi il ciclo appena il nome è stato trovato.

let arrayFesta = ["Giorgio", "Giovanni", "Paolo", "Secondo"];

let nomeUtente4 = prompt("Qual è il tuo nome?");

let y = 0;

while (y < arrayFesta.length) {

    if (nomeUtente4 == arrayFesta[y]) {
        console.log("Puoi entrare :)");
        break;

    } else if ( y == (arrayFesta - 1) ) {
        console.log("Fatti un giro");
    }

    y++
}
 
// funziona