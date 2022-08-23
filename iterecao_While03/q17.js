import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const N = Number(input("num: "))

    let soma = 0
    let i = 1
    while(i <= N){
        soma += 1 / i
        console.log(`${1} / ${i}`)
        i++
    }
    console.log(`Soma = ${soma.toFixed(2)}`)

}
main()