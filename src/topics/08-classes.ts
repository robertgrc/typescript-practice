//*--- Aqui tenemos un ejemplo donde la clase Hero Extiende de clase Person 
//*Donde ponemos el Super se tiene que poner las propiedades del padre en este caso tenemos que poner en super( name y address?) porque  Hero esta extendiendo de Person linea22  entonces el padre de Hero seria Person y se accede mediante Super()

export class Person {

   //* primera forma de hacer 
    // public name?: string;
    // public address?: string;

    // constructor(name: string, address: string){
    //     this.name = name;
    //     this.address = address;
    // }
  
   //* segunda forma mas usual es lo mismo que el codigo de arriba
    constructor(
        public name: string, 
        public address: string = 'No Address'
    ){}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super('batman', 'ciudad gotica777')
//     }
// }
export class Hero {

    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        this.person = new Person(realName)
    }
}


const infoBatman = new Person('Batman', 'Ciudad Gotica');
const batman = new Hero( 'bruce wayne', 38, 'Bruno Diaz', infoBatman );
console.log(batman)
