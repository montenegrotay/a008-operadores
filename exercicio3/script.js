const operacaoA = 5 > 20 && 5 < 2;
console.log(operacaoA)
/* false, pois 5 não é maior que 20 e 5 não é menor que 2, portanto false && false, que devolve false */


const operacaoB = 5 === 5 || 5 === "5";
console.log(operacaoB)
/* true, pois 5 é igual a 5, portanto true || true, que devolve true */


const operacaoC = !(20 > 50);
console.log(operacaoC)
/* false, pois 20 não é maior que 50, portanto !false, que devolve !false. */


const operacaoD = !(20 > 50) || !(50 > 60);
console.log(operacaoD)
/* false, pois 20 não é maior que 50 ou 50 não é maior que 60, portanto !false || false, que devolve !false. */


