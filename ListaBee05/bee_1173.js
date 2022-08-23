import fs from 'fs'
const input = fs.readFileSync('bee_1173_input.txt', 'utf-8')
const lines = input.split('\n')

function main() {
    const N = new Array(10)

    for (let i = 0; i < N.length; i++) {
        N[i] = Number(lines[0])
        console.log(`N[${i}] = ${lines[0]}`)
        lines[0] = Number(lines[0] * 2)
    }
}
main()