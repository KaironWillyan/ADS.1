//8. Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
//quando a soma de dois números consecutivos da lista for igual a X.

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const numero = Number(input("Numero: "))
    let lista = [], numeros_digitados = 0
    for(let i = 0, soma = 0; soma != numero; i++){
        if(numeros_digitados > 2){
            soma -= lista[i - 2 ]
        }
        lista[i] = Number(input("numero: "))
        soma += lista[i]
        numeros_digitados++
    }
}
main()