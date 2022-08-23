import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [LimiteSuperior, LimiteInferior] = input("Digite LimiteSuperior e LimiteInferior: ").split(" ").map(Number)

    for(let i = LimiteSuperior; i > LimiteInferior; i--){
        if(eh_primo(i))[
            console.log(i)
        ]
    }

}
main()

function eh_primo(num){
    let qtd_divisores = 0
    for(let i = 0; i <= num; i++){
        if(num % i === 0){
            qtd_divisores++
        }
    }
    return !(qtd_divisores > 2)
}