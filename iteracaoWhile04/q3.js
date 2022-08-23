import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [num1, num2] = input("Digite dois números: ").split(" ").map(Number)
    const mdc = calcularMDC(num1, num2)
    console.log(mdc)

}
main()

function calcularMDC(num1, num2){
    let menor = pegar_menor(num1, num2)

    let mdc = 0
    for(let i = 1; i <= menor; i++){
        if(num1 % i == 0 && num2 % i == 0){
            mdc = i
        }
    }
    return mdc
}

function pegar_menor(num1, num2){
    let menor = 0
    if(num1 > num2){
        menor = num2
    }else{
        menor = num1
    }
    return menor
}