
class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor( nombre, codigo, frase){
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    };

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    };
};


const spiderman = new Persona( 'Peter', 'Spiderman', 'Soy tu amigable vecino');
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Soy Ironman' );

console.log(spiderman, ironman);

spiderman.miFrase();
ironman.miFrase();