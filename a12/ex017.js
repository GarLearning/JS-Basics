var data = new Date()
var hora = data.getHours()
console.log(`Agora são ${data.getHours()}:${data.getMinutes()}.`)

if(hora >= 18){
    console.log("Boa Noite!")
}else if (hora >= 12){
    console.log("Boa Tarde!")
}else{
    console.log("Bom Dia!")
}