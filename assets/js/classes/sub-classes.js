
class Persona {

    static _conteo = 0;

    static get conteo (){
        return Persona._conteo + ' Instancias'
    };

    static mensaje (){
        console.log(this.nombre);
        console.log('Hola a todos soy un método estático');
    };

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++;
    }


    set setComidaFavorita (comida){
        this.comida = comida;
    };

    get getComidaFavorita (){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    };

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    };

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    };
};


const spiderman = new Persona( 'Peter', 'Spiderman', 'Soy tu amigable vecino');