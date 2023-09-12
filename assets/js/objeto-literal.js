let personaje = {
    nombre: 'Mateo Solano',
    id: 1,
    vivo: false,
    edad: 17,
    direccion: {
        calle: 133,
        numero: '154A',
        casa: 47,
    },
    vestimenta: ['Negro', 'Blanco', 'Azul'],
    'ultima serie': 'Lucifer',
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);

//Para imprimir un arreglo dentro de un objeto literal
console.log('No. Trajes:', personaje.vestimenta.length);
console.log('Ultimo traje:', personaje.vestimenta [personaje.vestimenta.length - 1]); 

// Retoma el objeto literal
const x = 'vivo';
console.log('Vivo:', personaje[x]);

//Para imprimir un objeto con espacios o guiones
console.log('Última serie vista:', personaje['ultima serie']);  

// ----------> Segunda clase de objetos literales

// Para eliminar un objeto
delete personaje.edad;
console.log(personaje);

// Crea un objeto
personaje.casado = true;

// Para transformar los objetos en arreglos independientes; CADA OBJETO TIENE SU PROPIO ARRAY
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Congela la variable personaje sin que le editen los objetoa
Object.freeze(personaje);

personaje.nombre = 'Matias';
personaje["ultima serie"] = 'The good doctor';
console.log(personaje);

// Volver objetos en un solo arreglo

// Muestra solo propiedades
const propiedades = Object.getOwnPropertyNames(personaje);
// Muestra solo valores
const valores = Object.values(personaje);
console.log({propiedades, valores});