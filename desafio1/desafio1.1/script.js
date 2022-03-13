function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var saida = document.getElementById("saida")
    
    if (fano.value > ano || Number(fano.value) == 0) {
        alert("Algo deu errado. Verifique os dados e tente novamente.")
    }else {
        var sex = document.getElementsByName("txtsexo")
        var idade = ano - Number(fano.value)
        var genero = ""
        
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        
        if (sex[0].checked) {
            genero = "Homem"
            if (idade <= 14){
                img.setAttribute("src", "mcria.png")

            }else if(idade <= 24) {
                img.setAttribute("src", "mjov.png")

            }else if(idade <= 64) {
                img.setAttribute("src", "madul.png")

            }else{
                img.setAttribute("src", "mido.png")
            }
        }else {
            genero = "Mulherr"
            if(idade <= 14){
                img.setAttribute("src", "fcria.png")

            }else if(idade <= 24){
                img.setAttribute("src", "fjov.png")

            }else if(idade <= 64){
                img.setAttribute("src", "fadul.png")

            }else{
                img.setAttribute("src", "fido.png")

            }

        }
        saida.style.textAlign = "center"
        saida.innerHTML = `Detectado ${genero} com ${idade} anos.`
        saida.appendChild(img)
    }

}
//a quantidade de caracteres da variavel genero está influenciando na formatação, se for menas letras
//to que esta na parte mulher da um bug na formatação das img dos if de forma crescente