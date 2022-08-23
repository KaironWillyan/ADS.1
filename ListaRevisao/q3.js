import prompt from 'prompt-sync'
const input = prompt({ sigint: false })

function main() {
    const letra = input("Informe uma letra: ").toLowerCase()

    verificar_se_e_vogal(letra)

}
main()

function verificar_se_e_vogal(letra) {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        console.log("É vogal.")
    } else {
        console.log("É consoante.")
    }
}