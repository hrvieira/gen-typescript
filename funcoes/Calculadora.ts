import readline = require('readline-sync');

let num1: number;
let num2: number;

num1 = readline.questionFloat("Digite o primeiro número:\n");
num2 = readline.questionFloat("Digite o segundo número:\n");

function somar(num1: number, num2: number): number {
     return num1 + num2;
}

function subtrair(num1: number, num2: number): number {
     return num1 - num2;
}

function multiplicar(num1: number, num2: number): number {
     return num1 * num2;
}

function dividir(num1: number, num2: number): number {
     return num1 / num2;
}


console.log(`Soma: ${somar(num1,num2)}`);
console.log(`Subtrai: ${subtrair(num1,num2)}`);
console.log(`Multiplica: ${multiplicar(num1,num2)}`);
console.log(`Divide: ${dividir(num1,num2)}`);

function about(): void{
     console.log("Feito por hrvieira!")
}

about();