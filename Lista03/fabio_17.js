import { input } from "./io_utils.js"

function main(){
    const num1 = Number(input("Digite um número:"))
    const num2 = Number(input("Digite um número:"))

    const resultado = verificacao(num1,num2)
    console.log(resultado)
    function verificacao(a,b){
        let resto = a % b, resultado
        if(resto == 1){
            resultado = a + b + (a%b)
        }else if(resto == 2){
            if(a%2 == a){
                console.log("É par!")
            }else{
                console.log("É ímpar!")
            }
            if(b%2 == b){
                console.log("É par!")
            }else{
                console.log("É ímpar!")
            }
        }else if(resto == 3){
            resultado = (a + b) * a 
        }else if(resto == 4){
            resultado = (a + b) / a
        }else{
            console.log(`${a**2}  ${b**2}`)
        }
    }
}
main()