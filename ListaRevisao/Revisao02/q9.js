import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){
    const numDia = Number(input("Informe o número correspondente ao dia da semana: "))
    const diaSemana = descobrirDiaSemana(numDia)
    console.log(`${numDia} - ${diaSemana    }`)


    function descobrirDiaSemana(a){
        let diaSemana
        switch(true){
            case a == 1:
                diaSemana = "Domingo"
                break
            case a == 2:
                diaSemana = "Segunda"
                break
            case a == 3:
                diaSemana = "Terça"
                break
            case a == 4:
                diaSemana = "Quarta"
                break
            case a == 5:
                diaSemana = "Quinta"
                break
            case a == 6:
                diaSemana = "Sexta"
                break
            case a == 7:
                diaSemana = "Sábado"
                break
            default:
                diaSemana = "Inválido"
                break
        }

        return diaSemana
    }
}
main()