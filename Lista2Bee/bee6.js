import { input } from "./io_utils.js"

function main() {
    const pontos = input("Digite 2 pontos: ")
    const [X, Y] = pontos.split(" ").map(Number)

    const quadrante = verificar_quadrante(X, Y)

    function verificar_quadrante(X, Y) {
        if ((X === 0 && Y > 0) || (X === 0 && Y < 0)) {
            console.log("Eixo Y")
        } else if ((Y === 0 && X > 0) || (Y === 0 && X < 0)) {
            console.log("Eixo X")
        } else if (X === 0 && Y === 0) {
            console.log("Origem")
        } else if (X > 0 && Y > 0) {
            console.log("Q1")
        } else if (X < 0 && Y > 0) {
            console.log("Q2")
        } else if (X < 0 && Y < 0) {
            console.log("Q3")
        } else if (X > 0 && Y < 0) {
            console.log("Q4")
        }
    }
}
main()