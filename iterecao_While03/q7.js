import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const num = Number(input("Num: "))
    let soma = 0

    let i = 0
    while(i < num){
        soma += i

        i++
    }
    console.log(soma)
}
main()