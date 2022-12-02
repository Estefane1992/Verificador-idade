function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('anoNascimento')
    var resultado = document.getElementById('resultado')
    if (formularioAno.value.length == 0 || Number (formularioAno.value) > ano) {
        window.alert('[ERRO] verifique os dados')
    } else {
        var formulariosexo = document.getElementsByName('radiosexo')
        var idade = ano - Number(formularioAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formulariosexo[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/foto-crianca-menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/foto-jovem-homem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/foto-adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idoso-homem.png')
            }

        } else if (formulariosexo[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/foto-crianca-menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/foto-jovem-mulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/foto-adulto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idosa-mulher.png')
            }
        }
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
        resultado.appendChild(img)
        
    }
}
   