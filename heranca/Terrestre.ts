import { Transporte } from "./Transporte";

export class Terrestre extends Transporte {

     private _numeroRodas: number;
     private _velocidade: number;


	constructor(capacidade: number, numeroRodas: number, velocidade: number) {
		super(capacidade);
          this._numeroRodas = numeroRodas;
		this._velocidade = velocidade;
	}

	public get numeroRodas() {
		return this._numeroRodas;
	}

	public set numeroRodas(value: number) {
		this._numeroRodas = value;
	}

	public get velocidade() {
		return this._velocidade;
	}

	public set velocidade(value: number) {
		this._velocidade = value;
	}

     public visualizar(): void {
          super.visualizar();
          console.log(`Número de rodas: ${this.numeroRodas}`);
          console.log(`Velocidade: ${this.velocidade}`);
     }
}