import fs from 'fs'
const input = fs.readFileSync('bee_1172_input.txt', 'utf-8')
const lines = input.split('\n')

function main() {
    const X = new Array(10)

    for (let i = 0; i < 10; i++) {
        X[i] = Number(lines[i])
        if (X[i] <= 0) {
            X[i] = 1
        }
        console.log(`X[${i}] = ${X[i]}`)
    }
}
main()