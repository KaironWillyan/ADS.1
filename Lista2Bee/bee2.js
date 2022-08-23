import { input } from "./io_utils.js"

function main(){
    
    const coeficientes = input("Informe os coeficientes A,B e C da equação d0 2ºgrau: ").split(" ").map(Number)
    
    const A = coeficientes[0]
    const B = coeficientes[1]
    const C = coeficientes[2]

    // -b +/- raiz(b² - 4*a*c) / 2a
    const delta = B**2 - 4*A*C
    const raiz1 = (-B + Math.sqrt(delta)) / (2 * A)
    const raiz2 = (-B - Math.sqrt(delta)) / (2 * A)

    if (delta < 0){
        console.log("Impossivel calcular")
    }else if(A == 0){
        console.log("Impossivel calcular")
    }else{
        console.log(`R1 = ${raiz1.toFixed(5)}`)
        console.log(`R2 = ${raiz2.toFixed(5)}`)
    }

}
main()