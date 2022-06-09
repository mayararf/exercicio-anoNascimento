function verificar() {
var data = new Date ()//pegar data
var ano = data.getFullYear()// pegar ano
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if(fano.value.length == 0 || fano.value >ano ) {//se ano for igual a 0 ou for maior que o ano atual irá dar erro
    window.alert ('verifique os dados e tente novamente')
}
else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var genero = ''//será descoberto no if qual o gernero
    var img = document.createElement ('img')// criando imagem no js
    img.setAttribute ('id','foto')
    
    if (fsex[0].checked) {
        genero = "Homem"
        if (idade >=0 && idade < 10) {
            img.setAttribute('src','bebemenino.png')
        
        } else if (idade < 21){
            img.setAttribute('src','jovemhomem.png')

        } else if (idade < 50) {
            img.setAttribute('src','homemadulto.png')


        } else {
            img.setAttribute('src','homemidoso.png')

        }
            
        
    }

    else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 10) {
            img.setAttribute('src','bebemenina.png' )
        
        } else if (idade < 21){
            img.setAttribute('src','jovemmulher.png' )

        } else if (idade < 50) {
            img.setAttribute('src','mulheradulta.png' )

        }else {
            img.setAttribute('src','idosamulher.png' )
            
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}



   
   
   
    /*var txtano = document.getElementById('txtano')
    var masc = document.getElementById('masc')
    var fem = document.getElementById('fem') 
    var ano = Number(txtano.value)
    var res = document.getElementById("res")
    var rsex = document.getElementsByName("radsex")
    var idade = 2021-ano
    var img = document.getElementById('foto')
    res.innerHTML =  `Sua idade é ${idade} anos`


    if (idade < 5 && rsex[1].checked){
        img.src = 'bebemenina.png'
    }*/