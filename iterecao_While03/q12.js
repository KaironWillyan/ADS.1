import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const num = Number(input("Informe o tamanho da lista: "))
    let soma = 0
    let i = 0
    while(i< num){
        soma += Number(input("num: "))

        i++
    }
    let media = soma / num

    console.log(`soma: ${soma}`)
    console.log(`média: ${media}`)
}
main()