import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numero = Number(input("Informe um número: "))

    mostrar_resultado(numero)
}
main()

function mostrar_resultado(num) {
    if (eh_int(num)) {
        console.log("O número é inteiro!")
    } else {
        console.log("O número é decimal!")
    }
}

function eh_int(num) {
    return (num % 1 === 0)
}