const num1 = Number (prompt("Escolha seu primeiro número:")) // número escolhido 4

const num2 = Number (prompt("Agora escolha o segundo:")) // número escolhido 30

console.log(`
 O primeiro número é maior que o segundo? ${num1 > num2}
 O primeiro número é igual ao segundo? ${num1 === num2}
 O primeiro número é divisível pelo segundo? ${num1 % num2 === 0}
 O segundo número é divisível pelo primeiro? ${num2 % num1 === 0} 
`)

//resposta: true / false / false / false
