var vetorValores = []
var inNumero = document.querySelector('input#num')
var btFinalizar = document.querySelector('input#btFinalizar')
var btAdicionar = document.querySelector('input#btAdicionar')
var tbNum = document.querySelector('table#tbNum')
var res = document.querySelector('p#res')


function inLista(n, l){
    //Se o valor está na lista, retorna verdadeiro
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function listNum(){
    //Se o valor não estiver na lista, é adicionado a lista e ao vetor
    if (!inLista(inNumero.value, vetorValores) && inNumero.value != ''){
        //Cria uma nova linha na tabela com o valor adicionado
        let linha = document.createElement('tr')
        let num = document.createElement('td')
        num.textContent = inNumero.value
        linha.appendChild(num)
        tbNum.appendChild(linha)
        res.innerHTML= ''
        //Adiciona os valores no vetor
        vetorValores.push(Number(inNumero.value))
    } else{
        window.alert('Digite um número, que não esteja na lista')
    }
    inNumero.value = ''
    inNumero.focus()
}


function verfNumeros(){
    soma = 0
    if(vetorValores.length == 0){
        window.alert("Digite pelo menos um valor")
    }else{
        var ordenado = vetorValores.sort()
        for(var i=0; i<vetorValores.length; i++){
            soma += vetorValores[i]
        }

        res.innerHTML = `Número de elementos: ${vetorValores.length}<br><br>`
        res.innerHTML += `Valor médio: ${soma / vetorValores.length}<br><br>`
        res.innerHTML += `Valor soma: ${soma}<br><br>`
        res.innerHTML += `Menor valor: ${ordenado[0]}<br><br>`
        res.innerHTML += `Maior valor: ${ordenado[ordenado.length - 1]}<br>`
    }
}