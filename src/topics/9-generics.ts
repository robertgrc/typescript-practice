

export function whatsMyTipe<T>(argument: T):T {
   
    return argument;
}

const amIString = whatsMyTipe<string>('Hola mundo');
const amINumber = whatsMyTipe<number>(700);
const amIArray = whatsMyTipe<number[]>([1,2,3,4,5,6,7]);

console.log(amIString.split(' ') );
console.log(amINumber.toFixed() );
console.log(amIArray.join('-') );