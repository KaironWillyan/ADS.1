import {input} from "./io_utils.js"

function main(){
    const numero = Number(input("Informe um número: "))
    const resultado = verificar_par_impar(numero)
    
    function verificar_par_impar(numero){
        if(numero % 2 == 0){
            console.log("É par!")            
        }else{
            console.log("É ímpar!")
        }
    }
}
main()