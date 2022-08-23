import prompt from 'prompt-sync'
const input = prompt({ sigint: false })

function main() {
    const turno = input("Informe seu turno(M, V, N): ").toUpperCase()

    verificar_turno(turno)

}
main()

function verificar_turno(turno) {
    if (turno == "M") {
        console.log("Bom dia!")
    } else if (turno == "V") {
        console.log("Boa tarde!")
    } else if (turno == "N") {
        console.log("Boa noite!")
    } else {
        console.log("Valor inválido.")
    }
}