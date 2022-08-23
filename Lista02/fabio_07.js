import {input} from "./io_utils.js"

function main(){
    const lados = input("Informe três lados do triângulo: ").split(" ").map(Number)
    const a = lados[0]
    const b = lados[1]
    const c = lados[2]
    const triangulo = e_triangulo(a,b,c)
    const tipo_do_tri = tipo_triangulo(a,b,c)

    function e_triangulo(a,b,c){
        let eh_triangulo
        if(a + b < c || a + c < b || c + b < a){
            console.log("Não é triângulo")
        }else{
            console.log("É triângulo")
        }
    }
    function tipo_triangulo(a,b,c){
        if(a == b && b == c){
            console.log("Equilátero")
        }else if(a == b || a == c || b === c){
            console.log("Isóceles")
        }else if(a != b && a != c && b != c){
            console.log("Escaleno")
        }
    }
}
main()