// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

const bici = [
    {
        nome: "verde",
        pesoInKg: 7,
    },
    {
        nome: "gialla",
        pesoInKg: 12,
    },
    {
        nome: "blu",
        pesoInKg: 9
    }
];

let pesopiuma = bici[0];

for(i=0; i < bici.length; i++){
    if( bici[i].pesoInKg < pesopiuma.pesoInKg){
        pesopiuma = bici[i];
    }
}

//destructuring bicileggera e dichiarazione

console.log(`La bici più leggera è ${pesopiuma.nome} e il suo peso in kg è di ${pesopiuma.pesoInKg}`);