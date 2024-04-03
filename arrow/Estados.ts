let estados: Array<string> = [
     "São Paulo",
     "Rio de Janeiro",
     "Minas Gerais",
     "Espirito Santo",
     "Rio Grande do Sul",
     "Rio Grande do Norte",
     "Santa Catarina",
     "Paraná"
];


let estadosRepetidos: Array<string> = [
     "São Paulo",
     "Rio de Janeiro",
     "Minas Gerais",
     "Espirito Santo",
     "Rio Grande do Sul",
     "Rio Grande do Norte",
     "Santa Catarina",
     "Paraná",
     "Rio de Janeiro",
     "Minas Gerais"
];
                                                            
let estadosContemRio = estados.filter(e => e.includes("Rio"));

//  .map usando o toUpperCase concerta a ordem
let estadosContemRioOrdenado = estados.filter(e => e.includes("Rio")).map(e => e.toUpperCase());

console.dir(estadosContemRio.sort());
console.dir(estadosContemRioOrdenado.sort());

let estadoRioParana = estados.some(e => {
     return e === "Rio de Janeiro" || e === "Paraná";
});

console.log(estadoRioParana);