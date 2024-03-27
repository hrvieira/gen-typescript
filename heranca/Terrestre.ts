import { Transporte } from "./Transporte";

export class Terrestre extends Transporte {

     private _numeroRodas: number;
     private _velocidade: number;


	constructor(capacidade: number, numeroRodas: number, velocidade: number) {
		super(capacidade);
          this._numeroRodas = numeroRodas;
		this._velocidade = velocidade;
	}

	public get_numeroRodas() {
		return this._numeroRodas;
	}

	public set_numeroRodas(value: number) {
		this._numeroRodas = value;
	}

	public get_velocidade() {
		return this._velocidade;
	}

	public set_velocidade(value: number) {
		this._velocidade = value;
	}

	protected calcularAliquota(percentual: number): number{
		return percentual / 100;
	}

     public visualizar(): void {
          super.visualizar();
          console.log(`Número de rodas: ${this._numeroRodas}`);
          console.log(`Velocidade: ${this._velocidade}`);
     }
}