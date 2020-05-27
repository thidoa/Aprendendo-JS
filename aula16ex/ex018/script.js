var b = []
let resf = document.getElementById("resf")


function calcular() {
    console.log("##INICIO DO CALCULAR##")
    let n = document.getElementById("txtnum")
    let res = document.getElementById("res")
    let n_num = Number(n.value)

    if (n_num < 1 || n_num > 100 || b.indexOf(n_num) != -1 || n.value.length == 0) {
        window.alert("Valor inválido ou já encontrado na lista.")
    } else {
        let item = document.createElement('option')
        item.text += `Valor ${n_num} adicionado.`
        res.appendChild(item)
        console.log("B calcular antes do push " + b)
        b.push(n_num)
        console.log("B calcular depois do push -->" + b)
    }
    console.log("##FIM DO CALCULAR##")
    resf.innerHTML = ''
}

function finalizar() {
    console.log("##INICIO DO FINALIZAR##")
    var ar = []
    ar = b;
    ar.sort( function(x, y){
        return x - y;
    });
    /*
    O "Sort()" classifica os valores como string() e os ordena em ordem ascendente. Ou seja, se seu array for de valores numéricos ele não terá a ordenação que você deseja. Pois o valor será interpretado como uma string e aí sim ordenado, então usei o metodo acima.
    */

    console.log("depois de reorganizar" + ar)
    

    

    resf.innerHTML += `<p>Ao todo, temos ${b.length} números cadastrados.</p>`

    resf.innerHTML += `<p>O maior valor informado foi ${ar[ar.length - 1]}.</p>`
    
}