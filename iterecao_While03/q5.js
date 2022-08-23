import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const num = Number(input("num: "))

    let fatorial = 1
    let i = num
    while(i > 0){
        fatorial *= i

        i--
    }

    console.log(fatorial)
}
main()