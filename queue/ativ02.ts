import { Stack } from "./Stack";

const leia = require('readline-sync');

const pilha = new Stack<string>();
let opcao: number;

do {
     console.log("****************************");
     console.log(" 1 - Adicionar Livro        ");
     console.log(" 2 - Listar Livros          ");
     console.log(" 3 - Retirar livro da pilha ");
     console.log(" 0 - Sair                   ");
     console.log("****************************");
     console.log("                            ");
     console.log("Qual a opção desejada?      ");
     opcao = leia.questionInt("");

     switch(opcao){
          case 1:
               const nome = leia.question("Digite o nome:\n");
               pilha.push(nome);
               console.log("Pilha: ");
               pilha.printStack();
               console.log("Livro Adicionado!");

               keyPress();
               break;
          case 2:
               if(pilha.isEmpty()){
                    console.log("A Pilha está vazia!");
               } else {
                    console.log("Lista de Livros na Pilha:");
                    pilha.printStack();
               }

               keyPress();
               break;
          case 3:
               if(pilha.isEmpty()){
                    console.log("A pilha está vazia!");
               } else {
                    pilha.pop();
                    console.log("Pilha:");
                    pilha.printStack();
                    console.log("Um Livro foi retirado da pilha!");
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