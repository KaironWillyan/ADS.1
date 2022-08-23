import { novo_vetor, mostrar_valores_do_vetor, vetor_invertido, receber_valores_para_o_vetor } from "./vetor_func.js"
import prompt from "prompt-sync"
const input = prompt()

function main() {
    const tamanhoVetor = Number(input("Tamanho do vetor: "))

    const vetor_A = novo_vetor(tamanhoVetor)

    receber_valores_para_o_vetor(vetor_A)

    mostrar_valores_do_vetor(vetor_A)

    const vetor_B = vetor_invertido(vetor_A)

    mostrar_valores_do_vetor(vetor_B)
}
main()