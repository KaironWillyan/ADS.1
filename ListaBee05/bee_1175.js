import fs from 'fs'
const input = fs.readFileSync('bee_1175_input.txt', 'utf-8')
const lines = input.split('\n')

function main() {
    const N = inverter_array()

    for (let i = 0; i < 20; i++) {
        console.log(`N[${i}] = ${N[i]}`)
    }
}
main()

function inverter_array() {
    const N = new Array(20)
    let cont = 19
    for (let i = 0; i < N.length; i++) {
        N[i] = Number(lines[cont])
        cont--
    }
    return N
}