import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [LimiteSuperior, LimiteInferior] = input("Digite LimiteSuperior e LimiteInferior: ").split(" ").map(Number)

    let i = LimiteSuperior
    while(i > LimiteInferior){
        if(eh_primo(i)){
            console.log(i)
        }
        i++
    }

}
main()

function eh_primo(num){
    let qtd_divisores = 0
    let i = 0
    while(i <= num){
        if(num % i === 0){
            qtd_divisores++
        }
        i++
    }
    return !(qtd_divisores > 2)
}