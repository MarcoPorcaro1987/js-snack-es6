// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

const squadre = [
    {
        nome: "Juventus",
        puntiFatti: getRndInteger(30, 60),
        falliSubiti: getRndInteger(40, 80)
    },
    {
        nome: "Cosenza",
        puntiFatti: getRndInteger(30, 60),
        falliSubiti: getRndInteger(40, 80)
    },
    {
        nome: "Chelsea",
        puntiFatti: getRndInteger(30, 60),
        falliSubiti: getRndInteger(40, 80)
    }
];

console.log(squadre);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
let newSquadre = [];

for ( let i = 0; i < squadre.length; i++ ) {
    const {nome, falliSubiti}  = squadre[i];
    newSquadre.push(nome);
    newSquadre.push(falliSubiti);
}

console.log(newSquadre);


