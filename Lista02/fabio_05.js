import {input} from "./io_utils.js"

function main(){
    const numero = input("Informe 3 números: ").split(" ").map(Number).sort(ordem_crescente)
    console.log(numero)
}

main()

function ordem_crescente(a,b){
    return b - a
}