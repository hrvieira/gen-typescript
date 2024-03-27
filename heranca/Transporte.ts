export class Transporte {

     private _capacidade: number;

     constructor(value: number) {
          this._capacidade = value;
     }

	public get capacidade() {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}

     public visualizar(): void{
          console.log("***************************");
          console.log("Meio de Transporte")
          console.log("***************************");
          console.log(`Capacidade: ${this._capacidade}`);
     }
}
