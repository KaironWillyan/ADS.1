import prompt from 'prompt-sync'
const input = prompt({ sigint: false })

function main() {
    const numero = Number(input("Informe um número: "))

    positivo_ou_negativo(numero)

}
main()


function positivo_ou_negativo(a) {
    if (a > 0) {
        console.log("O número é positivo.")
    } else {
        console.log("O número é negativo.")
    }
}