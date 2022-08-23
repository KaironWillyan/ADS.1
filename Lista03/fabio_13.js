import {input} from "./io_utils.js"

function main(){
    const numeros = input("Informe 5 números: ").split(" ").map(Number).sort(ordem_crescente)
    const num1 = numeros[0]
    const num2 = numeros[1]
    const num3 = numeros[2]
    const num4 = numeros[3]
    const num5 = numeros[4]

    console.log(num5)
    console.log(num1)

    function ordem_crescente(a,b){
        return a - b
    }
}
main()