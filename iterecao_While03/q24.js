import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const N = Number(input("Dados de quantas pessoas: "))
    let numero_de_filhos = 0, salario = 0, pessoas_com_salario_ate_mil = 0, media_salario, media_filhos, percentual_pessoas_com_salario_ate_mil
   
    let i = 0
    while(i < N){
        numero_de_filhos += Number(input("Qtd de filhos: "))
        salario += Number(input("salário: "))
        pessoas_com_salario_ate_mil += qtd_pessoas_com_salario_menor_igual_a_mil(salario)
        i++
    }
   
    media_salario = salario / N
    media_filhos = numero_de_filhos / N
    percentual_pessoas_com_salario_ate_mil = pessoas_com_salario_ate_mil / N * 100
    console.log(`média salário: R$ ${media_salario}`)
    console.log(`média filhos: ${media_filhos.toFixed(2)}`)
    console.log(`percentual de pessoas com salário de até R$ 1.000,00: ${percentual_pessoas_com_salario_ate_mil.toFixed(2)} %`)


}
main()

function qtd_pessoas_com_salario_menor_igual_a_mil(salario){
    let qtd_pessoas_com_salario_ate_mil = 0 
    if(salario <= 1000){
        qtd_pessoas_com_salario_ate_mil ++
    }

    return qtd_pessoas_com_salario_ate_mil
}