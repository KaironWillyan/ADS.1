import { input } from "./io_utils.js"

function main(){
    const hora1 = Number(input("Informe a quantidade de horas trabalhadas: "))
    const valor_hora1 = Number(input("Informe o valor da hora: "))
    const hora2 = Number(input("Informe a quantidade de horas trabalhadas: "))
    const valor_hora2 = Number(input("Informe o valor da hora: "))

    const tota1 = valor_total1(hora1,valor_hora1)
    const tota2 = valor_total2(hora2,valor_hora2)
    const maior = maior_salario(tota1,tota2)


    function valor_total1(a1,b1){
        const total1 = a1 * b1
      
    }
    function valor_total2(a2,b2){
        const total2 = a2 * b2
      
    }

    function maior_salario(a,b){
        if(a>b){
            console.log("Professor 1 ganha maior salário.")
        }else{
            console.log("Professor 2 ganha maior salário.")
        }
    }


}
main()