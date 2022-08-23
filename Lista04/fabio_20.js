import {input} from './io_utils.js'

function main(){
    const angulo = Number(input("Informe um ângulo: "))

    const  quadrante = descobrir_quadrante(angulo)
    

    function descobrir_quadrante(a){
        if(a > 0 && a < 90){
            console.log("Primeiro quadrante.")
        }else if(a > 90 && a < 180){
            console.log("Segundo quadrante.")
        }else if(a > 180 && a < 270){
            console.log("Terceiro quadrante.")
        }else if(a > 270 && a < 360){
            console.log("Quarto quadrante.")
        }
    }
}
main()