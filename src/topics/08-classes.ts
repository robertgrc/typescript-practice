

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

const ironman = new Person( 'johnwick', 'bolivia' );
console.log(ironman)
console.log('ironman.name', ironman.name)