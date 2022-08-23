import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let cod1 = Number(input("codigo 1 "))
    let cod2 = Number(input("codigo 2 "))

    for(let i = 1; cod1 != 21 || cod2 != 21; i++){
         cod1 += Number(input("codigo 1 "))
         cod2 += Number(input("codigo 2 "))

    }
console.log(`player 1: ${cod1}`)
console.log(`player 2: ${cod2}`)
}
main()