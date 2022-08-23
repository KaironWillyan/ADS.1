import prompt from 'prompt-sync'
const input = prompt({ sigint: false })

function main() {
    const sexo = input("Informe seu sexo(F ou M): ").toUpperCase()

    console.log(`Sexo: ${verificar_sexo(sexo)}`)

}
main()

function verificar_sexo(a) {
    let sexo
    if (a == "F") {
        sexo = "Feminino"
    } else if (a == "M") {
        sexo = "Masculino"
    } else {
        sexo = "Indefinido."
    }

    return sexo
}