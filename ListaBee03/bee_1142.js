import fs from 'fs'
const input = fs.readFileSync('bee_1142_input.txt', 'utf-8')
const lines = input.split('\n')

function main() {
    const N = Number(lines[0])
    let numeros = []
    for (let i = 1; i <= N * 4; i++) {
        numeros[i] = i
        if (i >= 4 && i % 4 === 0) {
            numeros[i] = 'PUM'
            console.log(numeros[i - 3], numeros[i - 2], numeros[i - 1], numeros[i])
        }
    }
}
main()