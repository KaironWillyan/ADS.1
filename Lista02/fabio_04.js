import { input } from "./io_utils.js"

function main(){
    let numero = input("Informe um número de 2 dígitos: ").split(" ").map(Number)
    dezena_unidade_igual_diferente(numero)
}

main()

function dezena_unidade_igual_diferente(numero){
    let dezena = 0, unidade = 0
    dezena = numero % 10
    unidade = Math.trunc((numero % 100)/10)
    if (unidade == dezena){
        console.log("Unidade é igual a dezena")
    }else{
        console.log("Unidade é diferente da dezena")
    }
}