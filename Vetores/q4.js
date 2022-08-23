import prompt from "prompt-sync"
const input = prompt()
import { novo_vetor, receber_valores_para_o_vetor, mostrar_vetor, juntar_dois_vetores_de_mesmo_tamanho, intersecao_entre_dois_vetores } from "./vetor_func.js"

function main() {
    const tamanhoDoVetor = Number(input("Tamanho dos vetores: "))
    const vetorA = novo_vetor(tamanhoDoVetor),
        vetorB = novo_vetor(tamanhoDoVetor)
    let vetorC = novo_vetor(tamanhoDoVetor * 2)

    receber_valores_para_o_vetor(vetorA)
    mostrar_vetor(vetorA)
    receber_valores_para_o_vetor(vetorB)
    mostrar_vetor(vetorB)

    vetorC = juntar_dois_vetores_de_mesmo_tamanho(vetorA, vetorB)
    mostrar_vetor(vetorC)

    let vetorD = intersecao_entre_dois_vetores(vetorA, vetorB)
    mostrar_vetor(vetorD)
}
main()