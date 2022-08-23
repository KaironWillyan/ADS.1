import prompt from 'prompt-sync'
const input = prompt()

//5. Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada 
//divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até chegar a 2.

function main(){
    let [X, N] = input("Escreva o valor de X e N ").split(" ").map(Number)
    let divisao = 0
    for(let i = N; i >= 2; i--){
        divisao = X / i
        X = divisao
        console.log(divisao.toFixed(2))
    }

}
main()