function calcular(){
    let num1 = document.getElementById("num1").value
    let num2 = Number(document.getElementById("num2").value)
    let res = document.getElementById("res")

    if (num1 == 0 || num2 <= 0){
        window.alert("Algo deu errado. Tente novamente.")
        
    }else{
        let calculo = document.createElement("select")
        res.append(calculo)
        calculo.style.width = "100px"
    

        for(let cont = 1 ; cont <= num2; cont++){
            let item = document.createElement("option")
            item.text = `${num1} x ${cont} = ${num1*cont}`
            item.value = `tab${cont}`
            calculo.append(item)
        }
    }

} 

