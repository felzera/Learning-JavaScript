function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.png'
        window.document.body.style.background = '#fbb176'
    } else if (hora >= 12 && hora <= 18 ){
        //BOA TARDE!
        img.src = 'fototarde.png'
        window.document.body.style.background = '#8baf92'
    } else{
        //BOA NOITE!
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#3e3245'
    }
}

