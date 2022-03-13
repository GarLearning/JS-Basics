function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imgmanha")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 18){//noite
        img.src = "pngnoite.png"
        document.body.style.background = "#2e7391"
    }

    else if(hora >= 12){//tarde
        img.src = "pngtarde.png"
        document.body.style.background = "#c1a6a8"
    }

    else{//dia
        img.src = "pngmanha.png"
        document.body.style.background = "#d2864f"
    }   
}
