let juegos = ['Fifa', 'Call of Duty', 'Mario', 'Pes'];
console.log('Largo:', juegos.length); 

let primero = juegos[2 - 2];
// .lenfth sirve para saber el total de elementos
let ultimo = juegos[juegos.length - 1];

console.log('primero:', primero, ' ultimo:', ultimo);

// .push agrega un elemento al final del arreglo
let nuevaLongitud = juegos.push('Cocina');
console.log({nuevaLongitud, juegos});

// .unshift agrega un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Mario_Car');
console.log({nuevaLongitud, juegos});

// .pop elimina el primer elemento del arreglo
let juegoBorrado = juegos.pop()
console.log({juegoBorrado, juegos});

// definimos posicion
let pos = 1;

console.log(juegos);
// elimina un elemento en específico
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

// CaSeSeNsItIvE: Las mayúsculas son importantes
// .indexOf sirve para saber la posición de un elemento
let marioIndex = juegos.indexOf('Mario');
console.log({marioIndex});
