let a = 10;
let b = a;

a = 30;

console.log({a,b});


let juan = { nombre: 'Juan'};
// EXPRED: separa los elementos {...juan}
let ana = juan;
ana.nombre = 'Ana';

console.log({juan,ana});


// REST: Une todos los argumentos en una sola variable cuando es parentesis (...persona)
const cambiarNombre = ( persona ) => {
    persona.nombre = 'Tony'
    return persona
};

let mateo = { nombre: 'Mateo'};
let tony = cambiarNombre(mateo);

console.log({mateo,tony});