import { input } from "./io_utils.js"

function main() {
    const notas = input("Informe as 4 notas: ")
    const [N1, N2, N3, N4] = notas.split(" ").map(Number)

    let nota_exame, media_final

    const media = calcular_media_ponderada(N1, N2, N3, N4)
    console.log(`Media: ${media.toFixed(1)}`)

    if (media >= 7) {
        console.log("Aluno aprovado.")
    } else if (media < 5) {
        console.log("Aluno reprovado.")
    } else if (media >= 5 && media < 7) {
        console.log("Aluno em exame.")
        nota_exame = Number(input("Informe a nota do exame: "))
        console.log(`Nota do exame: ${nota_exame.toFixed(1)}`)
        media_final = (nota_exame + media) / 2
        if (media_final >= 5) {
            console.log("Aluno aprovado.")
        } else {
            console.log("Aluno reprovado.")
        }
        console.log(`Media final: ${media_final.toFixed(1)}`)
    }

    function calcular_media_ponderada(N1, N2, N3, N4) {
        return (N1 * 2 + N2 * 3 + N3 * 4 + N4 * 1) / 10
    }
}
main()