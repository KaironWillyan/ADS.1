//7. Leia um vetor A de N elementos e escreva um vetor B de N elementos, conforme a seguinte condição:
//se índice de A[índice] é par então B[índice] = 0, caso contrário B[índice] = 1.
import { input, mostrar_vetor, novo_vetor, receber_valores_para_o_vetor } from './vetor_func.js'

function main() {
    const N = Number(input("Quantos elementos terá o vetor?"))

    const A = novo_vetor(N)
    receber_valores_para_o_vetor(A)

    let B = novo_vetor(N)

    for (let i = 0; i < N; i++) {
        if (eh_par(A[i])) {
            B[i] = 0
        } else {
            B[i] = 1
        }
    }

    mostrar_vetor(B)

}

const eh_par = num => num % 2
main()