var vetorValores = []
var numeroInput = document.querySelector('input#numero')
var btFinalizar = document.querySelector('input#btFinalizar')

function addNumeros(){
    var numero = numeroInput.value
    
    var valores = document.querySelector('div#valores')
    //tabela.innerHTML = '<tr><th>Valores</th></tr>'
    if (numero.length == 0 || numero == 0){
        window.alert("Digite um valor que seja diferente de zero")
    }
    else{
        valores.innerHTML += ` ${numero},`
        vetorValores.push(numero)
    }
    return vetorValores
}

vetorValores = addNumeros()

function analisarNumeros(){
    console.log(vetorValores)
    let soma = 0

    for (val in vetorValores){
        soma += vetorValores[val]
    }
    console.log(soma)
}