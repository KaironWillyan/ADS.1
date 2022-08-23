import fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numeros = leia_numeros('bee_1080_input.txt').split('\n').map(Number)

    const [maior_numero, posicao_maior] = pegar_maior_numero_e_posicao(numeros)

    console.log(maior_numero)
    console.log(posicao_maior)
}
main()

function pegar_maior_numero_e_posicao(numeros) {
    let maior = 0,
        index_do_maior
    for (let index in numeros) {
        if (numeros[index] > maior) {
            maior = numeros[index]
            index_do_maior = index
        }
    }

    let posicao_do_maior = Number(index_do_maior) + 1
    return [maior, posicao_do_maior]
}

function leia_numeros() {
    const numeros = fs.readFileSync('bee_1080_input.txt', { encoding: 'utf-8' })
    return numeros
}