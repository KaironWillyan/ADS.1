import {input} from "./io_utils.js"

function main(){
    const numero = input("Informe três números: ").split(" ").map(Number)
    const a = numero[0]
    const b = numero[1]
    const c = numero[2]
    let iguais = verificar_quantos_numeros_iguais(a,b,c)
    console.log(`Números iguais: ${iguais}`)
}

main()

function verificar_quantos_numeros_iguais(a,b,c){
    let igual = 0

    if(a == b){
        igual += 1
    }
    if(a == c){
        igual += 1
    }
    if(b == c){
        igual += 1
    }
    return igual
}