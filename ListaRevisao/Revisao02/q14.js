import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const tipo_combustivel = input("Qual o tipo de combustível você irá colocar?(Gasolina-(G) Álcool-(A) ) ").toUpperCase()
    const quantidade_L = Number(input("Quantos litros você irá colocar? "))

    const valor_do_combustivel = calcular_valor_do_combustivel(tipo_combustivel, quantidade_L)

    console.log(`O combustível deu um total de R$ ${valor_do_combustivel.toFixed(2)}`)
}
main()

function calcular_valor_do_combustivel(tipo_combustivel, quantidade) {
    let total
    const desconto_gasosa = calcular_desconto_gasolina(quantidade)
    const desconto_alcool = calcular_desconto_alcool(quantidade)

    if (tipo_combustivel === "G") {
        total = (quantidade * 2.50) - desconto_gasosa
    } else {
        total = (quantidade * 1.90) - desconto_alcool
    }

    return total
}

function calcular_desconto_gasolina(quantidade) {
    let desconto_gasosa
    if (quantidade <= 20) {
        desconto_gasosa = quantidade * 0.04
    } else {
        desconto_gasosa = quantidade * 0.06
    }

    return desconto_gasosa
}

function calcular_desconto_alcool(quantidade) {
    let desconto_alcool = 0
    if (quantidade <= 20) {
        desconto_alcool = quantidade * 0.03
    } else {
        desconto_alcool = quantidade * 0.05
    }

    return desconto_alcool
}