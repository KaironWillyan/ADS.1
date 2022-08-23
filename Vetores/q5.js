import { novo_vetor, receber_valores_para_o_vetor, mostrar_vetor } from './vetor_func.js'

function main() {
    const vetorA = novo_vetor(20)
    receber_valores_para_o_vetor(vetorA)
    mostrar_vetor(vetorA)
    let S = 0
    for (let i = 0, j = 19; i < 20 && j > 0; i++, j--) {
        S += (vetorA[i] - vetorA[j]) ** 2
    }

    console.log("Soma: ", +S)
}
main()