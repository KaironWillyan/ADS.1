import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const num = Number(input("Num: "))
    let soma = 0

    for(let i = 0; i < num; i ++){
        soma += i
    }
    console.log(soma)
}
main()