import {input} from "./io_utils.js"

function main(){
    const numero = input("Informe dois números: ").split(" ").map(Number)
    const a = numero[0]
    const b = numero[1]
    verificar_e_printar_maior_menor(a,b)
    
}
main()

function verificar_e_printar_maior_menor(a,b){
    if(a > b){
        console.log(`O número ${a} é maior que ${b}`)
    }else {
        console.log(`O número ${b} é maior que ${a}`)
    }
}