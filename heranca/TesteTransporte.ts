import { Transporte } from "./Transporte";
import { Terrestre } from "./Terrestre";
import { Automovel } from "./Automovel";

let t1: Transporte = new Transporte(5);
t1.capacidade = 4;

console.log(`A capacidade do meio de transporte é: ${t1.capacidade}`);

let ter1: Terrestre = new Terrestre(5, 4, 2000);
ter1.visualizar();

let aut1: Automovel = new Automovel(5, 4, 250, "Verde e amarelo", 5, "FJW-3567-2587", 6);

aut1.visualizar();

aut1.calcularIpva(60000);