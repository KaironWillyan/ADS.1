import {input} from "./io_utils.js"

function main(){
    const inicio_jogo = input("Informe a hora de início(hh:mm): ").split(":").map(Number)
    const final_jogo = input("Informe a hora do fim(hh:mm): ").split(":").map(Number)


    const resultado = duracao_jogo(inicio_jogo, final_jogo)
    console.log(`Tempo de jogo: ${resultado[0]}:${resultado[1]}`)




    function duracao_jogo(inicio, fim){
        const [hora_inicio, minuto_inicio] = inicio
        const [hora_fim, minuto_fim] = fim

        let horas_de_jogo, minutos_de_jogo 
        if(hora_fim > hora_inicio) {

            if(minuto_fim < minuto_inicio) {
                minuto_fim += 60
                hora_fim -= 1
            }

            horas_de_jogo = hora_fim - hora_inicio
            minutos_de_jogo = minuto_fim - minuto_inicio
    
    
        } else if (hora_fim <= hora_inicio) {
            const hora_pre = 23 - hora_inicio
            const minuto_pre = 60 - minuto_inicio
    
            horas_de_jogo = hora_pre + hora_fim
            minutos_de_jogo = minuto_pre + minuto_fim
    
            if (minutos_de_jogo >= 60) {
                minutos_de_jogo -= 60
                horas_de_jogo += 1
    
            }
        }
    
        return [horas_de_jogo, minutos_de_jogo]
    
    }
    

}
main()