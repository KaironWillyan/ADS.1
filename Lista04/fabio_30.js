import { input } from "./io_utils.js"

function main(){
    let numero
    do{
        numero = Number(input("Informe um número de 4 dígitos: "))
    }while(numero<1000 || numero > 9999)

    const part2 = numero % 100
    const part1 = Math.trunc(numero / 100)

    const soma = part1 + part2

    if(soma**2 == numero){
        console.log("Obedece.")
    }else{
        console.log("Não obedece.")
    }


}
main()