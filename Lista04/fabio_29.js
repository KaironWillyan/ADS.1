import { input } from "./io_utils.js"

function main(){
    let numero = Number(input("Informe um número: "))

    const raiz = Math.sqrt(numero)
    const pt2 = numero % 100
    const pt1 = Math.trunc(nuemro / 100)

    if (raiz == (pt1 + pt2)){
        console.log("É um quadrado perfeito!")
    }else{
        console.log("Não é um quadrado perfeito!")
    }
}
main()