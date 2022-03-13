//estrutura de repetição com teste logico no inicio
var con = 1
while (con < 1) {
    console.log(`dale ${con}`)
    con++
}

//estrutura de repetição com teste logico no final
var con = 1
do{
    console.log(`mec ${con}`)
    con++
}while(con < 1)//garante que o bloco seja executado ao menos 1 vez
//uma semelhança de do while seria(so q teria q mudar o sinal para <=, senão daria loop infinito):
con = 1
while (true) {
    console.log(`hiii ${con}`)
    if (con <= 1){
        break
    }
    con++
}