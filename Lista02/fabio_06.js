import { input } from "./io_utils.js"

function main() {
    const angulos = input("Informe três ângulos: ").split(" ").map(Number)
    const a = angulos[0]
    const b = angulos[1]
    const c = angulos[2]
    const triangulo = e_triangulo(a,b,c)
    const tipo_do_tri = tipo_triangulo(a,b,c)

    function e_triangulo(a,b,c){
        let eh_triangulo
        if(a + b + c > 180 || a == 0 || b == 0 || c == 0){
            console.log("Não é triângulo")
        }else{
            console.log("É triângulo")
        }
    }
    function tipo_triangulo(a,b,c){
        if(a < 90 && b < 90 && c < 90){
            console.log("Acutângulo")
        }else if(a == 90 || b == 90 || c == 90){
            console.log("Retângulo")
        }else if(a > 90 && b > 90 && c > 90){
            console.log("Obtusângulo")
        }
    }
}
main()