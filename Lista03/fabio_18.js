import { input } from "./io_utils.js"

function main(){
    const valores = input("Informe 2 valores: ").split(" ").map(Number)
    const opcao = Number(input("Informe a operção: (1 para adição. 2 para subtração. 3 para multiplpicaçãço e 4 para divisão): "))
    const num1 = valores[0]
    const num2 = valores[1]

    const resultado = operacao(num1, num2, opcao)
    console.log(resultado)
    
    function operacao(a,b,opcao){
        let resultado
        if(opcao == 1){
            resultado = a + b
        }else if(opcao == 2){
            resultado = a - b
        }else if(opcao == 3){
            resultado = a * b
        }else if(opcao == 4){
            resultado = a / b
        }

        return resultado
    }



}
main()