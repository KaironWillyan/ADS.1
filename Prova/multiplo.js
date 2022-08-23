import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){    
    let qtd_pares = 0
    let qtd_impares = 0
    let qtd_positivos = 0
    let qtd_negativos = 0

    let num1 = Number(input("Informe um número: "))
    let num2 = Number(input("Informe um número: "))
  
    while(verificarNaoDivisivel(num1,num2) == true){
        num1 = Number(input("Informe um número: "))
        num2 = Number(input("Informe um número: "))

        if(verificar_se_eh_par(num1)){
            qtd_pares++
        }else{
            qtd_impares++
        }
        if(verificar_se_eh_par(num2)){
            qtd_pares++
        }else{
            qtd_impares++
        }

        if(verificar_se_eh_positivo(num1)){
            qtd_positivos++
        }
        if(verificar_se_eh_positivo(num1)){
            qtd_positivos++
        }

        if(verificar_se_eh_negativo(num1)){
            qtd_negativos++
        }
        if(verificar_se_eh_negativo(num1)){
            qtd_negativos++
        }
    }


    console.log(`Qtd de Pares: ${qtd_pares}`)
    console.log(`Qtd de Ímpares: ${qtd_impares}`)
    console.log(`Qtd de Positivos: ${qtd_positivos}`)
    console.log(`Qtd de Negativos: ${qtd_negativos}`)
}

function verificarNaoDivisivel(a,b){
    if(a % b != 0){
        return true
    }else{
        return false
    }
}

function verificar_se_eh_par(num){
    return num % 2 === 0
}

function verificar_se_eh_positivo(num){
    return num > 0
}

function verificar_se_eh_negativo(valor){
    return valor < 0
}

main()