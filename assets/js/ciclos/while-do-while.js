
const carros = ['Toyota', 'Ferrari', 'Mazda', 'Ford', 'Dodge'];

let i = 0;

// while ( i < carros.length ) {
//     console.log( carros[i] );
//     i++;
// }

console.warn('While');

while ( carros[i]) {
    if ( i === 2) {  //Lo que hace es evadir cuando el arreglo valga 2
        // break; GENERA UN CICLO INFINITO
        i++;
        continue;
    }

    console.log( carros[i]);
    i++;
}

// DIFERENCIA: El do while siempre ejecutara el bloque de codigo así esté indefinido
//             El while no.

console.warn('Do While');
let j = 0;

do {
    console.log( carros[j]);
    j++;
} while ( carros[j]);