import { input } from "./io_utils.js"

function main(){
    let coeficientes
    do{
        coeficientes = input("Informe os coeficientes A,B e C da equação d0 2ºgrau: ").split(" ").map(Number)
    }while(coeficientes[0] == 0)
    const A = coeficientes[0]
    const B = coeficientes[1]
    const C = coeficientes[2]

    // -b +/- raiz(b² - 4*a*c) / 2a
    const delta = B**2 - 4*A*C
    console.log(delta)
    const raiz1 = (B * -1 + Math.sqrt(delta)) / (2 * A)
    const raiz2 = (B * -1 - Math.sqrt(delta)) / (2 * A)

    console.log(`Raiz1: ${raiz1} raiz2: ${raiz2}`)
}
main()