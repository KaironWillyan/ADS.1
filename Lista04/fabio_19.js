import {input} from './io_utils.js'

function main(){
    const peso = Number(input("Informe seu peso em kg: "))
    const altura = Number(input("Informe sua altura em m: "))

    const IMC = (peso / altura**2).toFixed(2)
    let grau
    console.log(`IMC: ${IMC}`)


    function verificar_grau(imc){
        if(imc < 25){
            console.log("Normal")
        }else if(imc >= 25 && imc < 30){
            console.log("Obeso")
        }else if(imc >= 30){
            console.log("Obesidade Mórbida")
        }
    }

}
main()