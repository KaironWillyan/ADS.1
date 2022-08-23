import prompt from 'prompt-sync'
const input = prompt()
//4. Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o 
//resultado da última divisão efetuada.
function main(){
    let numero = Number(input("numero: "))

    for(let i = numero; i > 0; i/=2){
        console.log(i.toFixed(2))
        if(i < 1){
            break
        }
    }

}
main()