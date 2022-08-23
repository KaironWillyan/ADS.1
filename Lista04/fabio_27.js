import {input} from "./io_utils.js"

function main (){
    const data_atual = input("Informe a data atual(dd/mm/aaaa) ").split("/").map(Number)
    const data_nascimento = input("Informe sua data de nascimento(dd/mm/aaaa) ").split("/").map(Number)
    const dia_atual = data_atual[0]
    const dia_nascimento = data_nascimento[0]
    const mes_atual = data_atual[1] * 30
    const mes_nascimento = data_nascimento[1] * 30
    const ano_atual = data_atual[2] * 365
    const ano_nascimento = data_nascimento[2] * 365

    const atual = dia_atual + mes_atual + ano_atual
    const nascimento = dia_nascimento + mes_nascimento + ano_nascimento

    let dias = atual - nascimento
    let anos = Math.abs(Math.trunc(dias / 365))
    dias %= 365
    let meses = Math.abs(Math.trunc(dias / 30))
    dias %= 30

    console.log(`Idade: dias: ${dias} / meses: ${meses} / anos: ${anos}`)

}
main()