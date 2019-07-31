 function verificar(){
     var data = new Date()
     var ano = data.getFullYear()
     var fano = window.document.querySelector('input#txtano')
     var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade  = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade >= 12 && idade < 23){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade >=23 && idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade >= 13 && idade < 23){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade >=23 && idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

 }