function go() {
    var data = new Date()
    var horas = data.getHours()
    var horasDoDia = document.querySelector('#horas')
    var saud = document.querySelector('#saudações')
    var img = document.querySelector('#img')
    horasDoDia.innerHTML = "agora são " + horas + " horas"
     
    if(horas >= 5 && horas <= 12 ) {
       document.body.style.background = 'yellowgreen'
       saud.innerHTML = 'BOM DIA!!'
       img.src = "imagens/manhã.jpg"
    }
    else if(horas >= 13 && horas <=  17) {
        saud.innerHTML = 'BOA TARDE!!'
        document.body.style.background = 'orange'
        img.src = 'imagens/tarde.jpg'
    }
    else { 
        saud.innerHTML = "BOA NOITE!!"
        document.body.style.background = 'gray'
        img.src = 'imagens/noite.jpg'
    }
   
}
