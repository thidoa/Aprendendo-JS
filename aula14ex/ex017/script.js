function calcular() {
    var n = document.getElementById('txtnum')
    var res = document.getElementById('res')

    if (n.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else { 
        var n_num = Number(n.value)
        var t = 1
        res.innerHTML = ''
        for (t; t <= 10; t++) {
            var item = document.createElement('option')
            item.text = `${n_num} x ${t} = ${t*n_num}`
            item.value = `res${t}`
            res.appendChild(item)
        }
    }
}