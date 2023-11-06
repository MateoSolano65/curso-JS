// function saludar(nombre) {
//     console.log(arguments);
//     console.log('Hola', nombre );
// }

// const saludar2 = function (nombre) {
//     console.log('Hola ' + nombre);
// }

// const saludarFlecha = () => {
//     console.log('Hola Flecha');
// }

// const saludarFlecha2 = (nombre) => {
//     console.log('Hola ' + nombre);
// }

// saludar('Mateo', true, 17);
// // saludar2('Mateo');
// saludarFlecha();
// saludarFlecha2('Maria');


// RETORNOS

function sumar (a, b){
    return a + b;
}

// Funcion de Flecha
// const sumar2 = (a,b) => {
//     return a * b;
// }

//Simplifica la funcion de flechita
const sumar2 = (a,b) => a * b;

console.log(sumar(1,2));
console.log(sumar2(5,5)); 


function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());