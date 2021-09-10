// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const giorni = ["lunedì","martedì","mercoledì","giovedì","venerdì","sabato","domenica"];

let a= prompt("inserisci il giorno della settimana in cui farai il check-in");

let b= prompt("inserisci il giorno della settimana in cui farai il check-out");

const soggiorno = giorni.filter((element,index)=>{return(index >= giorni.indexOf(a) && index <= giorni.indexOf(b))});

console.log(soggiorno);

