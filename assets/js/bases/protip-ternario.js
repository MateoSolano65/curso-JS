const elMayor = ( a,b ) => (a<b) ? b : a;

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log(elMayor(100,15));
console.log(tieneMembresia(false));

const amigo = true;
const amigosAvg = [
    'Thor',
    'peter',
    'Juan',
    (amigo) ? 'Tony' : 'Pepito',

]

console.log(amigosAvg);


const nota = 95.5; //SE NECESITA SABER SI ES A+,A,B+,B O F
const letraNota = (nota >= 95) ? 'A+' :
                (nota >= 90) ? 'A'    :
                (nota >= 85) ? 'B+'   :
                (nota >= 80) ? 'B'   : 'F';

console.log({nota, letraNota});
