function par_impar(option=1, num, n1=0, n2=0){
    if (option==1){    
        if(num%2==0){
            return "par!"
        }else{
            return "impar!"
        }
    }else if (option == 2){
        return n1 + n2

    }else{
        return "opção não definida!"
    }
}

res = par_impar(2, 46465556165646188123123456845135763165486165761515646, 5)
console.log(res)