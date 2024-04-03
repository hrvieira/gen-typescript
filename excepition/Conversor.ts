try {
     const resultado = converte(123);

     console.log(resultado);

} catch(error){
     if (error instanceof TypeError){
          console.log(`TypeError: ${error.message}`);
     } else {
          console.log(`Erro: ${error}`);
     }
     // Descobrindo o tipo de erro
     /* console.log(Object.getPrototypeOf(error)) */
} finally {
     console.log("Bye bye!")
}

export function converte(conteudo: any): string {
     return conteudo.toUpperCase();
}