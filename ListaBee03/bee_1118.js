import fs from 'fs'
const input = fs.readFileSync('bee_1118_input.txt', 'utf-8')
const lines = input.split('\n')

function main() {
    let nota, nota_valida = 0,
        media = 0,
        codigo = 0,
        contador = 0

    while (codigo != 2) {
        for (let i = contador; nota_valida < 2; contador++) {
            nota = Number(lines[contador])
            verificar_nota_eh_valida(nota)
            mostrar_se_nota_eh_invalida(nota)

            if (verificar_nota_eh_valida(nota)) {
                nota_valida++
                media += nota
            }
        }
        codigo = 0
        media = media / 2
        console.log(`media = ${media.toFixed(2)}`)

        while (codigo != 1 && codigo != 2) {
            console.log('novo calculo (1-sim 2-nao)')
            codigo = Number(lines[contador])
            contador++
        }
        media = 0
        nota_valida = 0
    }

}
main()

function verificar_nota_eh_valida(nota) {
    return nota >= 0 && nota <= 10
}

function mostrar_se_nota_eh_invalida(nota) {
    if (!(verificar_nota_eh_valida(nota))) {
        console.log('nota invalida')
    }
}