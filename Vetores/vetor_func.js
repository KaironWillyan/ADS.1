import prompt from "prompt-sync"
export const input = prompt()

export function novo_vetor(length) {
    return new Array(length)
}

export function mostrar_valores_do_vetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        console.log(i, ' --> ', vetor[i])
    }
}

export function mostrar_vetor(vetor) {
    console.log(vetor)
}

export function receber_valores_para_o_vetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Number(input("valor:"))
    }
    return vetor
}

export function vetor_invertido(vetor) {
    let tamanhoDoVetor = vetor.length
    let vetor_invertido = novo_vetor(tamanhoDoVetor)

    for (let i = 0; i < tamanhoDoVetor; i++) {
        vetor_invertido[i] = vetor[tamanhoDoVetor - 1 - i]
    }
    return vetor_invertido
}

export function verificar_se_tem_repetidos(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        if (vetor[i] == vetor[i + 1]) {
            return true
        }
    }
    return false
}

export function juntar_dois_vetores_de_mesmo_tamanho(vetor_a, vetor_b) {
    const tamanhoDoVetor = vetor_a.length
    const vetor_c = novo_vetor(tamanhoDoVetor * 2)

    for (let i = 0, j = 0; i < vetor_c.length; i++) {
        if (i < tamanhoDoVetor) {
            vetor_c[i] = vetor_a[i]
        } else {
            vetor_c[i] = vetor_b[j]
            j++
        }
    }
    return vetor_c
}

export function intersecao_entre_dois_vetores(vetor_a, vetor_b) {
    let tamanhoDoVetor = vetor_a.length
    let vetorD = []

    for (let i = 0; i < tamanhoDoVetor; i++) {
        for (let j = 0; j < tamanhoDoVetor; j++) {
            if (vetor_a[i] == vetor_b[j]) {
                vetorD = vetor_push(vetorD, vetor_a[i])
                i++
            }
        }
    }
    return vetorD
}

export function adicionar_item_vetor(vetor, posicao, item) {
    const novoVetor = novo_vetor(vetor.length + 1)
    for (let i = 0, j = 0; i < novoVetor.length; i++) {
        if (i === posicao) {
            novoVetor[i] = item
        } else {
            novoVetor[i] = vetor[j]
            j++
        }
    }

    return novoVetor
}

export function vetor_push(vetor, item) {
    return adicionar_item_vetor(vetor, vetor.length, item)
}