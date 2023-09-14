let a = 15;

if ( a > 10 ) {
    console.log('A es mayor a 10');
}

// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log({dia});

// (=) es de asignación, (==) sirve para la condicion y retorna el booleano
//                            pero no le interesa el tipo de dato

if ( dia === 2) {
    console.log('Hoy es martes');
} else if ( dia === 1){
    console.log('Es lunes');
} else if (dia === 0) {
    console.log('Es domingo');
} else { console.log('No es ni lunes ni martes ni domingo');}


dia = 1;

const diaLetras = {
    1: '    Lunes',
    2: '   Martes',
    3: 'Miercoles',
    4: '   Jueves',
    5: '  Viernes',
    6: '  Sabado ',
    0: ' domingo ',
}

const diaLetras2 = [
    ' domingo ',
    '    Lunes',
    '   Martes',
    'Miercoles',
    '   Jueves',
    '  Viernes',
    '  Sabado ',
]

console.log( diaLetras2[dia] || 'Dia no definido' );