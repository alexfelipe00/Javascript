function gerarTabuada(){
    var numeroInput = document.querySelector('input#numero')
    var numero = numeroInput.value
    var resultados = document.querySelector('p#resultados')
    var tabela = document.querySelector('table#tabela')

    if (numero.length == 0 || numero == 0){
        window.alert("Digite um valor que seja diferente de zero")
    }
    else{
        tabela.innerHTML = '<tr><th>Calculo</th><th>Resultado</th></tr>'
        for (let a=1; a<=10; a++){
            let linha = document.createElement('tr')
            let calc = document.createElement('td')
            let res = document.createElement('td')
    
            calc.textContent=`${a} x ${numero}`
            res.textContent= `${a * numero}`
    
            linha.appendChild(calc)
            linha.appendChild(res)
    
            tabela.appendChild(linha)

        }
    }

}