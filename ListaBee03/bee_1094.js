import fs from 'fs'
const input = fs.readFileSync("bee_1094_input.txt", 'utf-8')
const lines = input.split("\n")
    // import prompt from 'prompt-sync'
    // const input = prompt()
    // Total: 92 cobaias
    // Total de coelhos: 29
    // Total de ratos: 40
    // Total de sapos: 23
    // Percentual de coelhos: 31.52 %
    // Percentual de ratos: 43.48 %
    // Percentual de sapos: 25.00 %
function main() {
    const N = Number(lines[0])
    let Quantia = []
    let Tipo = []

    for (let i = 0; i < N; i++) {
        [Quantia[i], Tipo[i]] = lines[i + 1].split(" ")
    }
    const quantidade = Quantia.map(Number)
    const tipo = Tipo

    const [qtd_ratos, qtd_coelhos, qtd_sapos, qtd_Total] = contar_animais(quantidade, Tipo)
    const [percentual_coelhos, percentual_ratos, percentual_sapos] = porcentagem_animais(qtd_Total, qtd_coelhos, qtd_ratos, qtd_sapos)

    console.log(`Total: ${qtd_Total} cobaias`)
    console.log(`Total de coelhos: ${qtd_coelhos}`)
    console.log(`Total de ratos: ${qtd_ratos}`)
    console.log(`Total de sapos: ${qtd_sapos}`)
    console.log(`Percentual de coelhos: ${percentual_coelhos.toFixed(2)} %`)
    console.log(`Percentual de ratos: ${percentual_ratos.toFixed(2)} %`)
    console.log(`Percentual de sapos: ${percentual_sapos.toFixed(2)} %`)


}
main()

function contar_animais(quantia, tipos) {
    let qtd_ratos = 0
    let qtd_sapos = 0
    let qtd_coelhos = 0

    for (let i = 0; i < tipos.length; i++) {
        if (tipos[i] == 'C' || tipos[i] == 'C\r') {
            qtd_coelhos += quantia[i]
        } else if (tipos[i] == 'R' || tipos[i] == 'R\r') {
            qtd_ratos += quantia[i]
        } else if (tipos[i] == 'S' || tipos[i] == 'S\r') {
            qtd_sapos += quantia[i]
        }
    }
    let qtd_total = qtd_coelhos + qtd_ratos + qtd_sapos

    return [qtd_ratos, qtd_coelhos, qtd_sapos, qtd_total]
}

function porcentagem_animais(qtd_total, qtd_coelhos, qtd_ratos, qtd_sapos) { // %qtd = x/100 * total  
    let percentual_coelhos = 100 * qtd_coelhos / qtd_total,
        percentual_ratos = 100 * qtd_ratos / qtd_total,
        percentual_sapos = 100 * qtd_sapos / qtd_total

    return [percentual_coelhos, percentual_ratos, percentual_sapos]
}