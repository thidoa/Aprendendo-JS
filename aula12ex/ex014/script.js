function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += '<p>BOM DIA!<p>'
        img.src = 'manhã.jpg'
        document.body.style.background = '#fff876'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += '<p>BOA TARDE!<p>'
        img.src = 'tarde.jpg'
        document.body.style.background = '#fe9d4e'
    } else {
        msg.innerHTML += '<p>BOA NOITE!<p>'
        img.src = 'noite.jpg'
        document.body.style.background = '#000018' 
    }
}
