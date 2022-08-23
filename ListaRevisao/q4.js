import prompt from 'prompt-sync'
const input = prompt({ sigint: false })

function main() {
    const [nota1, nota2] = input("Informe duas notas: ").split(" ").map(Number)
    const media = (nota1 + nota2) / 2

    if (media >= 7 && media == 10) {
        console.log("Aprovado com Distinção")
    } else if (media >= 7) {
        console.log("Aprovado.")
    } else {
        console.log("Reprovado.")
    }

}
main()