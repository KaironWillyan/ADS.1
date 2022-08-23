import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const N = Number(input("Informe o tamanho da lista: "))
    let maior

    let num1 = Number(input("num: "))
    let num2

    let i = 1
    while(i < N){
        num2 = Number(input("num: "))
        maior = pegar_maior(num1, num2)
        i++
    }

    console.log(`maior: ${maior}`)
}

function pegar_maior(num1, num2){
    let maior 
    if(num1 > num2){
        maior = num1
    }else{
        maior = num2
    }
    return maior
}

main()