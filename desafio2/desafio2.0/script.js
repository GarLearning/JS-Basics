function contar() {
    var inicio = document.getElementById("inicio").value//let no lugar do var facilita em relaçlão a scopo(n existi quando sai da function"let no caso")
    var fim = document.getElementById("fim").value
    var passo = document.getElementById("passo").value
    var res = document.getElementById("res")
    res.innerHTML = ""

    if (passo <= 0){
        alert("Intervalo não aceito. Passo será 1.")
        var passo = 1
    }

    var i = Number(inicio)
    var f = Number(fim)
    var p = Number(passo)

    if (i < f){
        //contagem crescente
        for (var cont = i; cont <= f; cont += p) {
            res.innerHTML += ` ${cont}\u{1f449}`
        }
    }else{
        //contagem regresciva
        for (var cont = i; cont >= f; cont -= p) {
            res.innerHTML += `${cont}\u{1f449}`
        }
    }

    res.innerHTML += `\u{1f3c1}`
}