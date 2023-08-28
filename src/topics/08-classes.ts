

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

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super('batman', 'ciudad gotica777')
    }
}


// const jhonwick = new Person( 'johnwick', 'bolivia' );
const batman = new Hero( 'bruce wayne', 38, 'Bruno Diaz' );
console.log(batman)
console.log('batman.name', batman.name)