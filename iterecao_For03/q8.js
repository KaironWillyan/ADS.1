import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [num , LimiteSuperior, LimiteInferior] = input("Digite N, LimiteSuperior, LimiteInferior: ").split(" ").map(Number)
    let multiplos = ``
    for(let i = LimiteInferior; i < LimiteSuperior; i++){
        if(num % i === 0){
            multiplos += `${i} `
        }
    }
    console.log(multiplos)
}
main()