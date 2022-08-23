import {input} from "./io_utils.js"

function main(){
    const numero = Number(input("Informe um número: "))
    let resultado = 0
    
    for(let i = 2; i <= numero/2; i++){
        if (numero % i == 0){
            resultado++
        }
    }

    if(resultado == 0){
        console.log("É primo!")
    }else{
        console.log("Não é primo!")
    }
    
}
main()