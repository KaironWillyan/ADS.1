import prompt from 'prompt-sync'
const input = prompt({ sigint: false })

function main() {
    const salario = Number(input("Informe seu salário antes do reajuste: R$ "))
    let newSalary, percentual, valorAumento

    switch (true) {
        case salario <= 280:
            valorAumento = salario * 0.20
            percentual = 20
            break
        case salario > 280 && salario < 700:
            valorAumento = salario * 0.15
            percentual = 15
            break
        case salario >= 700 && salario < 1500:
            valorAumento = salario * 0.10
            percentual = 10
            break
        case salario >= 1500:
            valorAumento = salario * 0.05
            percentual = 5
            break
    }

    newSalary = salario + valorAumento

    console.log(`Salário antes do reajuste: R$ ${salario.toFixed(2)}`)
    console.log(`Percentual de aumento: ${percentual}%`)
    console.log(`Valor do aumento: R$ ${valorAumento.toFixed(2)}`)
    console.log(`Salário após aumento: R$ ${newSalary.toFixed(2)}`)

}
main()