// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.


const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

const squadre = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0    
    },
    {
        nome: "Cosenza",
        puntiFatti: 0,
        falliSubiti: 0    
    },
    {
        nome: "Chelsea",
        puntiFatti: 0,
        falliSubiti: 0    
    }
];

console.log(squadre);

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

for ( let i = 0; i < squadre.length; i++ ) {
    const {nome, falliSubiti}  = squadre[i];
    squadre[i].puntiFatti = getRndInteger(30, 60);
    squadre[i].falliSubiti = getRndInteger(15, 30);
}

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const newSquadre = [];

for ( let i = 0; i < squadre.length; i++ ) {
    
    const {nome, falliSubiti}  = squadre[i];

    // const squadra = {
    //     nome,
    //     falliSubiti
    // };
    // newSquadre.push(squadra);

    newSquadre.push({
        nome,
        falliSubiti
    });
}

console.log(newSquadre);