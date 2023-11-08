 

class Singleton {

    //Estos valores son opcionales ya que se crean en el constructor
    static instancia; // undefined
    nombre = '';

    constructor( nombre = '' ) {
   
        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

//SINGLETON Se basa en que solo puede existir una instancia;
//  por ende siempre será Ironman en este caso

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');


console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia3 es: ${ instancia3.nombre }`);

