import { input } from "./io_utils.js"

function main(){
    const notas = input("Informe as duas notas: ").split(' ').map(Number)
    const nota1 = notas[0]
    const nota2 = notas[1]

    function verificar_aprovacao(a,b){
        if((a+b)/2 >= 7){
            console.log("Aprovado!")
        }
    }
}
main()