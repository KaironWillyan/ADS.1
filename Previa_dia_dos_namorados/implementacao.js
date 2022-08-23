import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let numero_da_prova, qtd_nadadores, nome, classificacao, tempo, clube, qtd_pontos_A = 0,
        qtd_pontos_B = 0

    do {
        [numero_da_prova, qtd_nadadores] = input("Informe o número da prova e a quantidade de nadadores: ").split(" ").map(Number)
        for (let i = 0; i < qtd_nadadores; i++) {
            nome = input("Digite seu nome: ")
            classificacao = Number(input("Qual sua classificação? "))
            tempo = input("Em quanto tempo finalizou a prova? ")
            clube = input("Você é do Clube 'A' ou 'B'").toUpperCase()
            if (clube == 'A') {
                qtd_pontos_A += incrementar_quantidade_de_pontos(classificacao)
            } else {
                qtd_pontos_B += incrementar_quantidade_de_pontos(classificacao)
            }
        }
    } while (numero_da_prova != 0 && qtd_nadadores != 0)

    mostar_resultado(qtd_pontos_A, qtd_pontos_B)
}

function incrementar_quantidade_de_pontos(classificacao) {
    let qtd_pontos = 0
    if (classificacao == 1) {
        qtd_pontos += 9
    } else if (classificacao == 2) {
        qtd_pontos += 6
    } else if (classificacao == 3) {
        qtd_pontos += 4
    } else if (classificacao == 4) {
        qtd_pontos += 3
    }
    return qtd_pontos
}

function mostar_resultado(qtd_pontos_A, qtd_pontos_B) {
    if (qtd_pontos_A > qtd_pontos_B) {
        console.log(`Clube A vencedor com ${qtd_pontos_A} pontos`)
        console.log(`Time B fez ${qtd_pontos_B} pontos`)
    } else {
        console.log(`Clube B vencedor com ${qtd_pontos_B} pontos`)
        console.log(`Time A fez ${qtd_pontos_A} pontos`)
    }
}
main()