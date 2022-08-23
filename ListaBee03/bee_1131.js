import fs from 'fs'
const input = fs.readFileSync('bee_1131_input.txt', 'utf-8')
const lines = input.split('\n')
    //errad0
function main() {
    let gols_gremio = 0,
        gols_inter = 0,
        vitorias_gremio = 0,
        vitorias_inter = 0,
        empates = 0,
        verificar_repeticao = 0,
        contador = 0,
        quantidade_de_jogos = 0,
        venceu_mais

    for (let i = contador; verificar_repeticao != 2; contador++) {
        [gols_inter, gols_gremio] = lines[contador].split(" ").map(Number)
        contador++
        console.log('Novo grenal (1-sim 2-nao)')
        verificar_repeticao = lines[contador]

        if (verificar_time_vencedor(gols_inter, gols_gremio) == "empate") {
            empates++
        } else if (verificar_time_vencedor(gols_inter, gols_gremio)) {
            vitorias_inter++
        } else if (!(verificar_time_vencedor(gols_inter, gols_gremio))) {
            vitorias_gremio++
        }
        venceu_mais = time_que_venceu_mais(vitorias_inter, vitorias_gremio)
        quantidade_de_jogos++
    }

    console.log(`${quantidade_de_jogos} grenais`)
    console.log(`Inter: ${vitorias_inter}`)
    console.log(`Gremio: ${vitorias_gremio}`)
    console.log(`Empates: ${empates}`)
    console.log(venceu_mais)

}
main()

function verificar_time_vencedor(timeA, timeB) {
    if (timeA == timeB) {
        return "empate"
    }
    return timeA > timeB
}

function time_que_venceu_mais(VitoriasA, VitoriasB) {
    let venceu_mais
    if (VitoriasA > VitoriasB) {
        venceu_mais = 'Inter venceu mais'
    } else if (VitoriasA > VitoriasB) {
        venceu_mais = 'Gremio venceu mais'
    } else {
        venceu_mais = 'Não houve vencedor'
    }

    return venceu_mais
}