import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.log("Responda somente com S ou N.")
    let respostas = input("Você telefonou para a vítima? ")
    respostas += input("Você esteve no local do crime? ")
    respostas += input("Você mora perto da vítima? ")
    respostas += input("Você devia para a vítima? ")
    respostas += input("Você já trabalhou com a vítima? ")

    const sim = respostas_sim(respostas)

    const veredicto = veredito(sim)

    console.log(`O rel foi dado como ${veredicto}`)

}
main()

function respostas_sim(respostas) {
    let respostas_sim = 0

    const apuracao = respostas.split("")

    for (let resposta of apuracao) {
        if (resposta = 'S') {
            respostas_sim++
        }
    }

    return respostas_sim
}

function veredito(sim) {
    let resultado = ""
    if (eh_suspeito(sim)) {
        resultado = "suspeito"
    } else if (eh_cumplice(sim)) {
        resultado = "cúmplice"
    } else if (eh_assassino(sim)) {
        resultado = "assassino"
    }

    return resultado
}

function eh_suspeito(respostas_sim) {
    return (respostas_sim == 2)
}

function eh_cumplice(respostas_sim) {
    return (respostas_sim == 3 || respostas_sim == 4)
}

function eh_assassino(respostas_sim) {
    return (respostas_sim == 5)
}