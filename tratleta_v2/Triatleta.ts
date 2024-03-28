import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";


export class Triatleta extends Pessoa implements Ciclista, Nadador, Corredor {
     

	constructor(nome: string) {
          super(nome);
	}

     
     pedalar(): void {
          throw new Error("Method not implemented.");
     }
     
     nadar(): void {
          throw new Error("Method not implemented.");
     }
     
     correr(): void {
          throw new Error("Method not implemented.");
     }

     aquecer(): void {
          throw new Error("Method not implemented.");
     }
     

}