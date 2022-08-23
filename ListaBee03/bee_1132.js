import fs from 'fs'
const input = fs.readFileSync('bee_1132_input.txt', 'utf-8')
const lines = input.split('\n')

function main() {
    let numero1 = Number(lines[0]),
        numero2 = Number(lines[1])
    let [menor, maior] = menor_e_maior_valor(numero1, numero2)
    let soma = somar_numeros_nao_divisiveis_por_treze(menor, maior)

    console.log(soma)
}
main()

function menor_e_maior_valor(a, b) {
    let menor, maior
    if (a > b) {
        maior = a, menor = b
    } else {
        maior = b, menor = a
    }
    return [menor, maior]
}

function somar_numeros_nao_divisiveis_por_treze(inicio, fim) {
    let soma = 0
    if (inicio < 0 && fim < 0) {
        inicio = -inicio
        fim = -fim
        soma = somar_de_inicio_ao_fim(inicio, fim)
        return -soma
    } else {
        soma = somar_de_inicio_ao_fim(inicio, fim)
    }
    return soma
}

function somar_de_inicio_ao_fim(inicio, fim) {
    let soma = 0
    for (let i = inicio; i <= fim; i++) {
        if (!(verificar_se_eh_divisivel_por_treze(i))) {
            soma += i
        }
    }
    return soma
}

function verificar_se_eh_divisivel_por_treze(numero) {
    return (numero % 13 === 0)
}