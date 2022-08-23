import {input, mostrar_vetor, novo_vetor, pegar_maior_valor_e_posicao, pegar_menor_valor_e_posicao, receber_valores_para_o_vetor } from './vetor_func.js'

function main(){
    const N = Number(input("Qtd elementos: "))
    let vetor_N = novo_vetor(N)
    vetor_N = receber_valores_para_o_vetor(vetor_N)
    let [maior_valor, posicao_maior] = pegar_maior_valor_e_posicao(vetor_N)
    let [menor_valor, posicao_menor] = pegar_menor_valor_e_posicao(vetor_N)

    console.log(`maior valor: ${maior_valor}, posição: ${posicao_maior}`)
    console.log(`menor valor: ${menor_valor} posição: ${posicao_menor}`)
}
main()