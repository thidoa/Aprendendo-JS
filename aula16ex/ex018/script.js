var b = []
let resf = document.getElementById("resf")


function adicionar() {
    let n = document.getElementById("txtnum")
    let res = document.getElementById("res")
    let n_num = Number(n.value)

    if (n_num < 1 || n_num > 100 || b.indexOf(n_num) != -1 || n.value.length == 0) {
        window.alert("Valor inválido ou já encontrado na lista.")
    } else {
        let item = document.createElement('option')
        item.text += `Valor ${n_num} adicionado.`
        res.appendChild(item)
        
        b.push(n_num)
    }
    n.value = ''
    n.focus()
    resf.innerHTML = ''
}

function finalizar() {
    var ar = []
    ar = b;
    ar.sort( function(x, y){
        return x - y;
    });

    /*
    O "Sort()" classifica os valores como string() e os ordena em ordem ascendente. Ou seja, se seu array for de valores numéricos ele não terá a ordenação que você deseja. Pois o valor será interpretado como uma string e aí sim ordenado, então usei o metodo acima.
    */
   if (b.length ==0){
       window.alert('Adicione valores antes de finalizar')
   } else {
        resf.innerHTML += `<p>Ao todo, temos ${b.length} números cadastrados.</p>`

        resf.innerHTML += `<p>O maior valor informado foi ${ar[ar.length - 1]}.</p>`

        resf.innerHTML += `<p>O menor valor informado foi ${ar[0]}.</p>`
        var soma = 0 

        for(let c = 0; c < b.length; c++) {
            soma = soma + b[c]
        }

        resf.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        
        resf.innerHTML += `<p>A média dos valores digitados é ${soma / b.length}.</p>`
    }    
}