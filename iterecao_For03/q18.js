import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const N = Number(input("num: "))

    let soma = 0
    let j = 0
    for(let i = N; i >= 1; i--){
        soma += 1 / (i - j)
        console.log(`${1} / ${i}`)
        j++
    }
    console.log(`Soma = ${soma.toFixed(2)}`)

}
main()