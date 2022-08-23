import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [num , LimiteSuperior, LimiteInferior] = input("Digite N, LimiteSuperior, LimiteInferior: ").split(" ").map(Number)
    let multiplos = ``
    let i = LimiteInferior
    while(i < LimiteInferior){
        if(num % i === 0){
            multiplos += `${i} `
        }
        i++
    }

    console.log(multiplos)
}
main()