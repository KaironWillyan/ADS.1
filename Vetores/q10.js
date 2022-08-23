import { input } from "./vetor_func.js"

function main() {
    const qtd_repeticoes = Number(input("Qtd numeros: "))
    const fibonacci = calcular_fibonacci(qtd_repeticoes)

    for(let i = 0; i < qtd_repeticoes; i++){
        console.log(fibonacci[i])
    }
}
main()

function calcular_fibonacci(parada) {
    let fibonacci = [0, 1]
    for (let i = 2; i <= parada; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    return fibonacci
}