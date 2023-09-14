const hoy = new Date();

let dia = hoy.getDate();
let mes = hoy.getMonth();

console.log({dia, mes});

if ( dia === 13 && mes === 8) {
    console.log('Feliz dia del programador en JS');
}
