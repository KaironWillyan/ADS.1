import {input} from "./io_utils.js"

function main(){
    const numeros = input("Informe a opção(1 a 3) e três números: ").split(" ").map(Number)
    const opcao  = numeros[0]
    const num1 = numeros[1]
    const num2 = numeros[2]
    const num3 = numeros[3]
   
    const resultado = verificar_opcao(opcao)
    console.log(`Número: ${numeros[resultado]}`)
    
    function verificar_opcao(opcao){
        let op = 0
        if(opcao == 1){
            op = 1
        }else if(opcao ==2 ){
            op = 2
        }else if(opcao == num3){
            op = 3
        }
        return op
    }
}
main()