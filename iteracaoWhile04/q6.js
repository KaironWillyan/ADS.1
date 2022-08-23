//6. Escreva um algoritmo para determinar o número de dígitos de um número informado.
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const numero = input("numero ").split("")
    const tamanho = numero.length

    console.log(tamanho)
}
main()