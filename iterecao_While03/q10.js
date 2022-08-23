import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [LimiteSuperior, LimiteInferior] = input("Digite LimiteSuperior e LimiteInferior: ").split(" ").map(Number)

    let i = LimiteSuperior
    while(i > LimiteInferior){
        if(eh_impar(i)){
            console.log(i)
        }
        i--
    }

}
main()

function eh_impar(num){
    return !(num % 2 === 0)
}