import fs from 'fs'
const input = fs.readFileSync('bee_1174_input.txt', 'utf-8')
const lines = input.split('\n')

function main() {
    const A = new Array(100)
    for (let i = 0; i < A.length; i++) {
        if (Number(lines[i]) <= 10) {
            console.log(`A[${i}] = ${Number(lines[i]).toFixed(1)}`)
        }
    }
}
main()