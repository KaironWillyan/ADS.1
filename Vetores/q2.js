import { novo_vetor, receber_valores_para_o_vetor, verificar_se_tem_repetidos } from "./vetor_func.js"
import prompt from "prompt-sync"
const input = prompt()

function main() {
    const tamanhoVetor = Number(input("Tamanho do vetor: "))

    const vetor_A = novo_vetor(tamanhoVetor)

    receber_valores_para_o_vetor(vetor_A)

    if (verificar_se_tem_repetidos(vetor_A)) {
        console.log("Tem repetido.")
    } else {
        console.log("Não tem elementos repetidos.")
    }
}
main()