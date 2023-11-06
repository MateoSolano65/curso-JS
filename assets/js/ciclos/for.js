
const heroes = ['Batman', 'Superman', 'Cristiano Ronaldo', 'Capitan America'];

console.warn('For tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}


console.warn('For in');

for (let i in heroes) {
    console.log(heroes[i]);
}


console.warn('For of');

for (const heroe of heroes) {
    console.log(heroe);
}


console.warn('For each');

heroes.forEach(heroe => {
    console.log(heroe);
});