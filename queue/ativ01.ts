import { Queue } from "./Queue";

const leia = require('readline-sync');

const fila = new Queue<string>();
let opcao: number;

do {
     console.log("***************************");
     console.log("   1 - Adicionar Cliente   ");
     console.log("   2 - Listar Clientes     ");
     console.log("   3 - Retirar da Fila     ");
     console.log("   0 - Sair                ");
     console.log("***************************");
     console.log("                           ");
     opcao = leia.questionInt("  Qual a opção desejada?   ");

     switch(opcao){
          case 1:
               const nome = leia.question("Digite o nome:\n");
               fila.enqueue(nome);
               console.log("Fila: ");
               fila.printQueue();
               console.log("Cliente Adicionado!");

               keyPress();
               break;
          case 2:
               if(fila.isEmpty()){
                    console.log("A Fila está vazia!");
               } else {
                    console.log("Lista de Clientes na Fila:\n");
                    fila.printQueue();
               }

               keyPress();
               break;
          case 3:
               if(fila.isEmpty()){
                    console.log("A Fila está vazia!");
               } else {
                    fila.dequeue();
                    console.log("Fila: ");
                    fila.printQueue();
                    console.log("O Cliente foi chamado!");
               }
               
               keyPress();
               break;
          case 0:
               console.log("Programa Finalizado!");

               break;
          default:
               console.log("Opção incorreta!");
     }
     
} while(opcao !== 0);

function keyPress(): void {
     console.log("\nPressione enter para continuar...");
     leia.prompt();
}