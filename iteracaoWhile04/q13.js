import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const salario = Number(input("Informe o salário: "))
    const novoSalario = novo_salario(salario)
    console.log(`R$ ${novoSalario.toFixed(2)}`)
}
main()

function  novo_salario(salario){
    let novo_salario
    if(salario > 0.00 && salario <= 2999.99){
        novo_salario = salario * 1.25
    }else if(salario >= 3000.00 && salario <= 5999.9){
        novo_salario = salario * 1.20
    }else if(salario >= 6000.00 && salario <= 9999.99){
        novo_salario = salario * 1.15
    }else{
        novo_salario = salario * 1.10
    }
    return novo_salario
}