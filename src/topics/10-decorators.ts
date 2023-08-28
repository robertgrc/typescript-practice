function classDecorator<T extends{new(...args:any[]):{}}>(
    constructor: T
) {
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {
    // @classDecorator
    public myProperty: string = 'Abc123';

    // @classDecorator
    print() {
        console.log('Hola Mundo')
    }
}

console.log(SuperClass)

const myClass  = new SuperClass();
console.log(myClass)