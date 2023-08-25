function addNumbers(a:number, b:number){
    return a + b
}

const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

const resultado = addNumbers(7,7)

function multiply (firstNumber:number, secondNumber?:number, base:number=2){
    return firstNumber * base
}
const resultadoAddNumbersArrow = addNumbersArrow(5, 2)
console.log("resultadoAddNumbers", resultadoAddNumbersArrow)

const multiplyResult:number = multiply(7)
console.log(multiplyResult)

interface Character{
    name:string;
    hp: number;
    showHp:()=>void;
}


const healCharacter = (character:Character, amount:number) =>{

    character.hp += amount;
}

const nova: Character = {
    name: "Nova",
    hp: 140,
    showHp() {
      console.log(`Puntos de vida ${ this.hp}`)
    }       
}

healCharacter(nova, 70);
nova.showHp()

export{}