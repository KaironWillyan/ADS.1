import prompt from 'prompt-sync'
const input = prompt()
/*16. Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.*/

function main(){
    const N = Number(input("num: "))
    const fibonacci = calcular_fibonacci(N)
    console.log(fibonacci)
}

function calcular_fibonacci(Num_termino) {
    let fibonacci = [0, 1]
    for (let i = 2; i < Num_termino; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    return fibonacci
}

main()