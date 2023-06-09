function carregarHORAS(){
    var msg = window.document.querySelector("div#msg")

    var data = new Date()
    var horas = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()

    //Formata horário
    // Adiciona um zero à esquerda se o valor for menor que 10
    if (horas < 10) {
        horas = '0' + horas;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (seg < 10) {
        seg = '0' + seg;
    }

    msg.innerHTML = `${horas}:${min}:${seg}`
}

function carregarFOTO(){
    var data = new Date()
    var horas = data.getHours()
    var img = window.document.querySelector("img#imagem")

    if (horas >= 0 && horas < 12){
        //BOM DIA
        img.src = "manha.png"
        window.document.body.style.background = '#ffe584'
    }else if(horas >= 12 && horas <= 18){
        //BOA TARDE
        img.src = "tarde.png"
        window.document.body.style.background = '#ffb466'
    }else{
        //BOA NOITE
        img.src = "noite.png"
        window.document.body.style.background = '#a69cff'
    }
}

setInterval(carregarHORAS, 1000);
