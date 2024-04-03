const numeros: Array<number> = new Array<number>();

numeros.push(1);
numeros.push(5);
numeros.push(7);
numeros.push(1);


numeros.unshift(2.5, 4.5);
console.table(numeros);

console.log(`A posição do elemento 5 é: ${numeros.indexOf(5)}`);

console.log(`O elemento 7 existe? ${numeros.includes(7)}`);

console.log(`O elemento 10 existe? ${numeros.includes(10)}`);

console.table(numeros);
numeros[numeros.indexOf(7)] = 10;
console.log(`O elemento 10 existe? ${numeros.includes(10)}`);

console.table(numeros);
// deleta - o valor 10 é encotrado em um array e um elemento é deletado, nesse caso o 10
numeros.splice(numeros.indexOf(10), 1);

console.table(numeros);