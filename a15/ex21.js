let num = []

num[1] = 3//coloca o valor na posição requerida, sobrescrevendo o valor q ta ali, 
//criando valores vazios caso n tenha nenhum antes
num.push(8, 9, 2, 10)//semelhante ao append, acrescenta na ultima posição
num[4] = 10
let quantidade = num.length
console.log(num, quantidade, num[0])

for(let p = 0; p < quantidade; p++){
    console.log(`o valor ${num[p]}`)
}

for (let p in num){
    console.log(`o valor${num[p]}`)// o p funciona ate sem ser definido "let p = 0", ele é usado
    //com as chaves enquanto estão presentes na variavel
}

console.log(num.indexOf(10))// qualquer valor existente ele retorna sua posição(da sua primeira ocorrencia)
//para valores inexistentes ele retorna -1