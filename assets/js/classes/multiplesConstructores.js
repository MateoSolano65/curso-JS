class Persona {

    static porObjeto ({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    };

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    };

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}


const nombre1 = 'Mateo',
      apellido1 = 'Solano',
      pais1 = 'Colombia';
      
      
const mateito = {
    nombre : 'Mateo',
    apellido : 'Solano',
    pais : 'Colombia'
};


const persona1 = new Persona( nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(mateito);

persona2.getInfo();