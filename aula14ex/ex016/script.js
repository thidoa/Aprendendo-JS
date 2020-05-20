function calcular() { 
    let i = document.getElementById('txtini')
    let f = document.getElementById('txtfim')
    let p = document.getElementById('txtpas')
    let res = document.getElementById('res')
    let i_num = Number(i.value)
    let f_num = Number(f.value)
    let p_num = Number(p.value)

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {

        if (p_num == 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p_num = 1
        }

        if (i_num > f_num) {
            res.innerHTML = 'Contando: <br>'
            for(i_num; i_num >= f_num; i_num -= p_num){
                res.innerHTML += `${i_num} \u{1F449}`
            }
            res.innerHTML += ` \u{1F3C1}`
        
        }else{
            res.innerHTML = 'Contando: <br>'
            for(i_num; i_num <= f_num; i_num = i_num += p_num){
                res.innerHTML += `${i_num} \u{1F449}`
            }
            res.innerHTML += ` \u{1F3C1}`
        }
        
    }
}