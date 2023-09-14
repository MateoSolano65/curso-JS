/**
 * entre semana se abre a las 11
 * los fds se abre a las 9
 */

// En tu sitio web, consultar si está abierto hoy

const dia = 1; //Domingo .. 1:Lunes
const horaActual = 8;

let horaApertura;
let mensaje;

// if ( dia === 6 || dia === 0) {

/**MAS FACIL DE ENTENDER */


// if ([0,6].includes( dia )) {    
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Entre semana');
//     horaApertura = 11;
// }

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;


// if ( horaActual >= horaApertura) {
//     mensaje = 'está abierto';
// } else {
//     mensaje = `está cerrado, hoy abrimos a las ${ horaApertura }`;
// }

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `está cerrado, hoy abrimos a las ${horaApertura}`;


console.log({ horaApertura, mensaje });