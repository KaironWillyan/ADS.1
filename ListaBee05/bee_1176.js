import fs from 'fs'
const input = fs.readFileSync('bee_1176_input.txt', 'utf-8')
const lines = input.split('\n')

function main() {
    const fibonacci = calcular_fibonacci()
    const qtd_repeticoes = Number(lines[0])

    let N
    for (let i = 1; i <= qtd_repeticoes; i++) {
        N = Number(lines[i])
        console.log(`Fib(${N}) = ${fibonacci[N]}`)
    }
}
main()

function calcular_fibonacci() {
    let fibonacci = [0, 1]
    for (let i = 2; i <= 60; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    return fibonacci
}