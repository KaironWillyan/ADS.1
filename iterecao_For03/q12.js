import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const num = Number(input("Informe o tamanho da lista: "))
    let soma = 0
    for(let i = 0; i < num; i++)[
        soma += Number(input("num: "))
    ]
    let media = soma / num

    console.log(`soma: ${soma}`)
    console.log(`média: ${media}`)
}
main()