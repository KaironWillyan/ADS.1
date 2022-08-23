/*Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...)..*/
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const N = Number(input("num: "))
    let razao = 1
    let i = 1
    while(i <= N){
        console.log(razao)
        razao += i + 1
    }

}
main()