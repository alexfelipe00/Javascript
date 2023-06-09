let num = [6, 8, 2, 4, 9]

//Adicionar valor ao vetor
num.push(1)

//Ordenar valor de forma crescente
num.sort()

//laço for tradicional
/*for (let a=0; a<=4; a++)
    console.log(`A posição ${a} possui o valor ${num[a]}`)  

//laço for com in
for (let pos in num){
    console.log(`A posição ${pos} possui o valor ${num[pos]}`)
}
*/

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//Verificar e saber qual posição está um valor
if (num.indexOf(8) < 0){
    console.log(`O vetor não possui o valor 8.`)
}else{
    console.log(`O valor 8 está na posição ${num.indexOf(8)} do vetor.`)
}

console.log(num)


