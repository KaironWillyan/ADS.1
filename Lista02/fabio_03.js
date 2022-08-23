import {input} from "./io_utils.js"

function main(){
    const numero = input("Informe três números: ").split(" ").map(Number)
    const a = numero[0]
    const b = numero[1]
    const c = numero[2]
    verificar_e_printar_maior(a,b,c)
    
}
main()

function verificar_e_printar_maior(a,b,c){
    if(a > b && a > c){
        console.log(`O número ${a} é maior`)
    }else if(b > a && b > c){
        console.log(`O número ${b} é maior`)
    }else if(c > a && c > b){
        console.log(`O número ${c} é maior`)
    }
}