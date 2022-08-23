//Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
//divisores. (flag número = 0).

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const tamanho = Number(input("Quantos números vc quer digitar? "))
    let numero, divisores
    for(let i = 0; i < tamanho; i++){
        numero = Number(input("número: "))
        divisores = pegar_divisores(numero)
        console.log(divisores)
    }

}
main()

function pegar_divisores(numero){
    let divisores = ``
    for(let i = numero; i > 0; i--){
        if(numero % i == 0){
            divisores += `${i} `
        }
    }

    return divisores
}