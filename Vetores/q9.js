import {input, mostrar_vetor, novo_vetor, receber_valores_para_o_vetor } from './vetor_func.js'

function main(){
    const N = Number(input("Qtd elementos: "))
    let vetor_N = novo_vetor(N)
    vetor_N = receber_valores_para_o_vetor(vetor_N)
    mostrar_vetor(vetor_N.sort(ordem_crescente ))

}
main()
function ordem_crescente(a,b){
    return a - b
}