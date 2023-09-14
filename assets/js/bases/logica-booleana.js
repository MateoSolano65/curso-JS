
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}


const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}



console.warn('Not o la negación');

console.log(true);
console.log( !true); // '!' es la negacion 
console.log( !false); // '!' es la negacion 


console.warn('Operador And'); //Si todos son verdadero se cumple
console.log( true && true); //True
console.log( true && !false); //True

console.log('======');
console.log( regresaFalse() && regresaTrue() ); //False SI EJECUTA 
// DE PRIMERAS EL FALSO, SOLO IMPPRIME FALSO Y NO MÁS

console.log( regresaTrue() && regresaFalse() ); //False
// EJECUTA AMBOS CLG DE LA FUNCION

console.log('4 condicones: ', true && true && true && false);

console.log('===&&===');
regresaFalse() && regresaTrue();

console.warn('Operador OR'); 
console.log( true || false);
console.log( false || false); //Solo es Falso si ambas lo son

console.log( regresaTrue() || regresaFalse() );
console.log('4 condicones: ', true || true || true || false);


console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo!' && 150;
const a2 = 'Hola' && ' mundo!' && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});