var data = new Date()
var dia_da_semana = data.getDay()// pega os dias da semana de forma numerica(0/6)

//laço usado para falores fixos
switch(dia_da_semana){//switch traz o valor da condicional
    case 0://traz os valores especificos
        console.log("Hoje é DOMINGO!")
        break
    case 1:
        console.log("Hoje é SEGUNDA-FEIRA!")
        break
    case 2:
        console.log("Hoje é TERÇA-FEIRA!")
        break
    case 3:
        console.log("Hoje é QUARTA-FEIRA!")
        break
    case 4:
        console.log("Hoje é QUINTA-FEIRA!")
        break
    case 5:
        console.log("Hoje é SEXTA-FEIRA!")
        break
    case 6:
        console.log("Hoje é SÁBADO!")
        break
    default:
        console.log("Erro! Comando invalido.")
        break
}
// break é obrigatorio para que após satisfazer o caso especifico n execultar todos os subsequentes
// deefault é para caso nenhuma dos casos forem aceitos