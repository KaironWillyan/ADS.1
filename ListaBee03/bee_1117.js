import fs from 'fs'
const input = fs.readFileSync('bee_1117_input.txt', 'utf-8')
const lines = input.split('\n')

function main() {
    let nota, nota_valida = 0,
        media = 0
    for (let i = 0; nota_valida < 2; i++) {
        nota = Number(lines[i])
        if (verificar_nota_eh_valida(nota)) {
            media += nota
            nota_valida++
        }
        mostrar_se_nota_eh_invalida(nota)
    }
    media = media / 2
    console.log(`media = ${media.toFixed(2)}`)

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