//7. Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let numero = Number(input("numero: "))

    let cont = 0
    while(cont != numero){
        let numero = Number(input("numero: "))
        cont = numero
    }

}
main()