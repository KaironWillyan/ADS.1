import fs from 'fs'
const input = fs.readFileSync('bee_1177_input.txt', 'utf-8')
const lines = input.split('\n')

function main() {
    const T = Number(lines[0])
    let numeros = []
    for (let i = 0, contador = 0; i < 1000; i++) {

        for (let cont = 0; cont < T; cont++) {
            numeros[contador] = cont
            contador++
        }
        console.log(`N[${i}] = ${numeros[i]}`)

    }
}
main()