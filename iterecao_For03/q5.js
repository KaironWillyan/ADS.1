import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const num = Number(input("num: "))

    let fatorial = 1
    for(let i = num; i > 0; i--){
        fatorial *= i
    }
    console.log(fatorial)
}
main()