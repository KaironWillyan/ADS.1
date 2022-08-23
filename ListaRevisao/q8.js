import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){
    const horasTrabalhadas = Number(input("Informe quantas horas você trabalha no mês: "))
    const valorHora = Number(input("Informe o valor que você cobra por hora: $ "))

    const salarioBruto = horasTrabalhadas * valorHora
    const fgts = salarioBruto * 0.11
    
    let IR, impostoR
    switch (true) {
        case salarioBruto <= 900:
            IR = "ISENTO"
            impostoR = 0
            break
        case salarioBruto > 900 && salarioBruto <= 1500:
            IR = salarioBruto * 0.05
            impostoR = 5
            break
        case salarioBruto > 1500 && salarioBruto <= 2500:
            IR = salarioBruto * 0.10
            impostoR = 10
            break
        default:
            IR = salarioBruto * 0.20
            impostoR = 20
            break   
    }

    const INSS = salarioBruto * 0.10, totalDescontos = IR + INSS, salarioLiquido = salarioBruto - totalDescontos


    console.log(`Salário bruto: ${horasTrabalhadas} * ${valorHora}    :  R$ ${salarioBruto.toFixed(2)}`)
    console.log(`(-) IR(${impostoR}%           : R$ ${IR})`)
    console.log(`(-) INSS(10%)           : R$ ${INSS.toFixed(2)}`)
    console.log(`FGTS (11%)            : R$ ${fgts.toFixed(2)}`)
    console.log(`Total de descontos            : R$ ${totalDescontos}`)
    console.log(`Salário Líquido           : R$ ${salarioLiquido.toFixed(2)}`)


}
main()
