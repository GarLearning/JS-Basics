var lista = []

function adicionar(){
    let num = document.querySelector("input#num").value
    let valores = document.querySelector("select#valores")
    let item = document.createElement("option")

    if (lista.indexOf(num) == -1 && num > 0 && num <= 100){
        item.append(`Adicionado o valor ${num}.`)
        valores.append(item)
        lista.push(num)
    }else{
        alert(`deu merda, o num é ${num}`)
    }
}

function finalizar(){
    let res = document.querySelector("div#res")
    res.innerHTML = `<p>Total de ${lista.length} valores.</p>`
    //https://www.youtube.com/watch?v=IY7TRbXLU6c min e max
    res.innerHTML += `<p>O maior valor foi: ${Math.max(...lista)}.</p>`
    res.innerHTML += `<p>O menor valor foi: ${Math.min.apply(null, lista)}.</p>`
    res.innerHTML += `<p>A soma entre eles é: ${sum()}.</p>`
    res.innerHTML += `<p>A média entre eles é: ${media().toFixed(2)}.</p>`
}

function sum(){
    let soma = 0
    for(let c = 0; lista.length > c; c++){
        soma += parseInt(lista[c])
    }
    return soma
}

function media(){
    return sum() / lista.length
}