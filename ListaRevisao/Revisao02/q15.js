import  prompt  from "prompt-sync"
const input = prompt()

function main() {
    const qtd_morango = Number(input('Quantidade em kg de morango:  '))
    const qtd_maca = Number(input('Quantidade em kg de maçã: '))
    const valor_total_da_compra = calcular_valor_da_compra(qtd_maca, qtd_morango)
    console.log(`Valor a ser pago: R$${valor_total_da_compra}`)
    
}

function calcular_valor_da_compra(qtd_kg_maca, qtd_kg_morango) {
    let valorMorango = 0
    let valorMaca = 0

    if(qtd_kg_morango>5) {
        valorMorango = 2.20
    } else {
        valorMorango = 2.50
    }
    if(qtd_kg_maca > 5){
        valorMaca = 1.50
    } else {
        valorMaca = 1.80
    }

    let valor_compra = valorMaca * qtd_kg_maca + valorMorango * qtd_kg_morango

    if(qtd_kg_morango + qtd_kg_maca > 8 || valor_compra > 25) {
        valor_compra = valor_compra * 0.9
    }
    return valor_compra
}

main()
